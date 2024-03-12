# cosby ml project
phase 1. gather data
    a.) scrape pdf data
        i. use puppeteer to search google for the pdf.
            1. search usin' randomized user agent (will fill this in once we get it to work, hopefully google doesn't block my ip)
            2. parse results for pdf (i'll need to figure out how to easily find the best result for it, should link directly to pdf)
        ii. use pdf2json to parse pdf (should be able to eliminate "fs" from the imports. no reason to write to a new file if it can do it on its own)
            1. hope an' pray that all the cds pdfs have the same format/page numbers; if not, need to find a common identifier for the decision portion
            2. figure out how to find where the Xs r positioned on the pdf relative to each column
            3. store this data in a new json file that should just have admission data
phase 2. parse data
phase 3. train model
phase 4. test inference/finetune
phase 5. deploy model