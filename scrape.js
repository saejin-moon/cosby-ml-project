import puppeteer from "puppeteer";
import Pdfparser from "pdf2json";
import fs from "fs/promises";
import { PdfReader, TableParser } from "pdfreader";

void async function main() {
    const nbCols = 2;
    const cellPadding = 40; // each cell is padded to fit 40 characters
    const columnQuantitizer = (item) => parseFloat(item.x) >= 20;

    const padColumns = (array, nb) =>
    Array.apply(null, { length: nb }).map((val, i) => array[i] || []);
    // .. because map() skips undefined elements

    const mergeCells = (cells) =>
    (cells || [])
        .map((cell) => cell.text)
        .join("") // merge cells
        .substr(0, cellPadding)
        .padEnd(cellPadding, " "); // padding

    const renderMatrix = (matrix) =>
    (matrix || [])
        .map((row, y) => padColumns(row, nbCols).map(mergeCells).join(" | "))
        .join("\n");

    var table = new TableParser();

    new PdfReader().parseFileItems("./cds/harvard.pdf", function (err, item) {
    if (!item || item.page) {
        // end of file, or page
        console.log(renderMatrix(table.getMatrix()));
        console.log("PAGE:", item.page);
        table = new TableParser(); // new/clear table for next page
    } else if (item.text) {
        // accumulate text items into rows object, per line
        table.processItem(item, columnQuantitizer(item));
    }
    });
    
    /*
    const parser = new Pdfparser();

    parser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
    parser.on("pdfParser_dataReady", async pdfData => {
        await fs.writeFile("./cds/harvard.json", JSON.stringify(pdfData));
    });

    parser.loadPDF("./cds/harvard.pdf");
    */
    // puppeteer sample code. works like a charm.
    /*
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate the page to a URL
    await page.goto('https://developer.chrome.com/');

    // Set screen size
    await page.setViewport({width: 1080, height: 1024});

    // Type into search box
    await page.type('.devsite-search-field', 'automate beyond recorder');

    // Wait and click on first result
    const searchResultSelector = '.devsite-result-item-link';
    await page.waitForSelector(searchResultSelector);
    await page.click(searchResultSelector);

    // Locate the full title with a unique string
    const textSelector = await page.waitForSelector(
        'text/Customize and automate'
    );
    const fullTitle = await textSelector?.evaluate(el => el.textContent);

    // Print the full title
    console.log('The title of this blog post is "%s".', fullTitle);

    await browser.close();
    */
}();