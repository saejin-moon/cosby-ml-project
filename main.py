import tabula
import PyPDF2

# returns page number as an integer, given the string to look for and the path of the pdf
def getPageNum(string, path):
    pdf = open(path, 'rb') 
    reader = PyPDF2.PdfReader(pdf)

    for pageNum in range(len(reader.pages)):
        pageObj = reader.pages[pageNum]
        pageText = pageObj.extract_text()
        if string in pageText:
            pdf.close()
            return pageNum + 1

# returns a pandas dataframe given the path to the common data set pdf
def findTable(path):
    pdf = tabula.read_pdf("./cds/harvard.pdf", pages=int(getPageNum("Relative importance of", path)))
    for pageNum in range(len(pdf)):
        for node in pdf[pageNum].values.tolist():
            string = node[0]
            if "Rigor of secondary school" in string:
                return pdf[pageNum]
    return None

print(findTable("./cds/harvard.pdf"))