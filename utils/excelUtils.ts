import * as XLSX from 'xlsx'

export class ExcelUtil{

    static getData(filePath:string,sheetName:string,rowNumber:number){

    const workbook = XLSX.readFile(filePath);
    const worksheet = workbook.Sheets[sheetName];   

    const data: any = XLSX.utils.sheet_to_json(worksheet)

    return data[rowNumber];

    }
}