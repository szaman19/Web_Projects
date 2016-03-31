import xlrd
import xlwt
from os.path import abspath, join, dirname
import datetime
'''
Write to file
xlwtOpenFile(fileName)
xlwtWrite(sheetName, data)

'''

def xlwtWrite(info):
    currentDir = dirname(abspath(__file__))
    fileDir = join(currentDir,"StoreDataSheets","Reports.xls")
    excelWriteFile = xlwt.Workbook()



    for store in info:
        reportSheet = excelWriteFile.add_sheet(store)
        reportSheet.write(0,0,"Store Name")
        reportSheet.write(0,1,"Total Sales")
        reportSheet.write(0,2,"Hotdog Sales")
        reportSheet.write(0,3,"Sausage Sales")
        reportSheet.write(0,4,"Bread Sales")
        reportSheet.write(0,5,"Start Date")
        reportSheet.write(0,6,"End Date")
        row = 0
        for weeklyUpdates in info[store]:
            row = row + 1
            col=-1
            for information in weeklyUpdates:
                col = col + 1
                reportSheet.write(row,col, information)

    # for key in info:
    #     row = row + 1
    #     col = -1
    #     for information in info[key]:
    #         col = col + 1
    #         reportSheet.write(row,col,information)
    #         #print(information)

    excelWriteFile.save(fileDir)
    return excelWriteFile




def xlrdRead():
    currentDir = dirname(abspath(__file__))
    fileDir = join(currentDir,"StoreDataSheets","StoreData.xlsx")
    excelFile = xlrd.open_workbook(fileDir)
    information = {}

    sheetNames = excelFile.sheet_names()
    for sheetName in sheetNames:
        sheet = excelFile.sheet_by_name(sheetName)
        dataExists = True;
        counter = 1
        newBalanceSum = 0
        newHotDogSum = 0
        newSausageSum = 0
        newBreadSum = 0
        startDateExcel = xlrd.xldate_as_tuple(((sheet.cell(counter,0)).value),0)
        startDate = datetime.datetime(*startDateExcel)
        previousBalance= (sheet.cell(counter,1)).value
        prevHD = (sheet.cell(counter,2)).value
        prevS = (sheet.cell(counter,4)).value
        prevB = (sheet.cell(counter,6)).value
        info = []
        while (counter < sheet.nrows -1 and dataExists):
            col0 = sheet.cell(counter,0)
            col1 = sheet.cell(counter,1)
            col2 = sheet.cell(counter,2)
            col3 = sheet.cell(counter,3)
            col4 = sheet.cell(counter,4)
            col5 = sheet.cell(counter,5)
            col6 = sheet.cell(counter,6)
            col7 = sheet.cell(counter,7)
            col8 = sheet.cell(counter,8)

            newBalanceSum = newBalanceSum + col8.value
            newHotDogSum = newHotDogSum + col3.value
            newSausageSum = newSausageSum + col5.value
            newBreadSum = newBreadSum + col7.value

            if((counter -1) % 7 == 0 and counter != 1):
                totalSale = newBalanceSum - previousBalance - col8.value
                totalHotDogSale = newHotDogSum + prevHD -  col3.value
                totalSausageSale = newSausageSum + prevS - col5.value
                totalBreadSale = newBreadSum + prevB - col7.value


                endDateExcel = xlrd.xldate_as_tuple(((sheet.cell(counter -1,0)).value),0)
                endDate = datetime.datetime(*endDateExcel)

                previousBalanceSum = col1.value
                prevHD = col2.value
                newHotDogSum = col3.value
                prevS = col4.value
                newSausageSum = col5.value
                prevB = col6.value
                newBreadSum = col7.value
                newBalanceSum = col8.value

                # print("| Store Name: ", sheetName,\
                #      "| Total Sales: ", totalSale,\
                #      "| Total Hotdog Sale: ", int(totalHotDogSale),\
                #      "| Total Sausage Sale: ", int(totalSausageSale),\
                #      "| Total Bread Sale: ", int(totalBreadSale),\
                #      "| Start Date: ", startDate.date(),\
                #      "| End Date: ", endDate.date(),"\n")
                info = [sheetName,totalSale,int(totalHotDogSale),int(totalSausageSale),int(totalBreadSale),\
                        startDate.strftime("%d/%m/%y"),endDate.strftime("%d/%m/%y")]

                if (info[0] in information):
                    temp = information[info[0]]
                    temp.append(info)
                    #print(temp)
                    information[info[0]] = temp
                    #print(information)
                else:
                    temp = []
                    temp.append(info)
                    information[info[0]]=temp
                    #print(information)
                #print(info)
                startDateExcel = xlrd.xldate_as_tuple(((sheet.cell(counter,0)).value),0)
                startDate = datetime.datetime(*startDateExcel)

            counter = counter+1
            try:
                if((sheet.cell(counter,1)).ctype ==0):
                    dataExists = False
            except Exception as e:
                dataExists = False
                print(e)
                print(counter)


    return information

def main():
    info = xlrdRead()
    xlwtWrite(info)
main()
