// module.exports = {
//  /* Add your test data here... */
// }


// When('I launch the url {string}', (arg2) => {
//     console.log("i am here" + arg2)
//     // let arg2Array = arg2.split("_");
//     // arg2 = arg2Array[0] + "_" + arg2Array[1];
//     // let userCriteria = arg2Array[0]; //loginCreds
//     // let sheet_Name = arg2Array[1] + "_testdatasheet.csv";
//     // browser.pause(10000);
//     // arg2 = 'user1_iss';
//     // // userCriteria= 'user1';
//     // // sheet_Name = 'iss_testdatasheet.csv';
//     // let datatablevalue = datatable(userCriteria, sheet_Name);
//     // //(5*100);
//     // do {
//     //     browser.pause(20);
//     //     console.log("..............................." + datatablevalue.url)
//     // } while (datatablevalue === undefined || datatablevalue === null);

//     // function datatable(userCriteria, sheet_Name) {
//     //     console.log(userCriteria + "  12345  " + sheet_Name)
//     //     returnUserDetail = [];
//     //     let output = [];
//     //     let parser = csv.parse({
//     //             delimiter: ',',
//     //             skip_lines_with_empty_values: true,
//     //             skip_lines_with_error: true
//     //         }).on('readable', function() {
//     //             let record;
//     //             while (record = this.read()) {
//     //                 output.push(record)
//     //                 //console.log(record)
//     //             }
//     //         })
//     //         // When we are done, test that the parsed output matched what expected
//     //         .on('end', function() {
//     //             console.log('Data Parsed Successfully');
//     //             random = Math.floor(Math.random() * ((returnUserDetail.length - 1) - 0 + 1)) + 0;
//     //             csvHeader = output[0];

//     //             let dataSpecificColumn;
//     //             let urlColumn;
//     //             let pageNameColumn;
//     //             let userNameColumn;
//     //             let passwordColumn;
//     //             // console.log("userCriteria value is: " + userCriteria);
//     //             // for (let columnCount = 0; columnCount < csvHeader.length; columnCount++) {
//     //             //     if (csvHeader[columnCount] === "dataSpecific") {
//     //             //         dataSpecificColumn = columnCount;
//     //             //     }
//     //             //     if (csvHeader[columnCount] === "url") {
//     //             //         urlColumn = columnCount;
//     //             //         console.log("url count is " + columnCount)
//     //             //     }
//     //             //     if (csvHeader[columnCount] === "pageName") {
//     //             //         pageNameColumn = columnCount;
//     //             //         console.log("pageName count is " + columnCount)
//     //             //     }
//     //             //     if (csvHeader[columnCount] === "userName") {
//     //             //         userNameColumn = columnCount;
//     //             //         console.log("username count is " + columnCount)
//     //             //     }
//     //             //     if (csvHeader[columnCount] === "passWord") {
//     //             //         passWordColumn = columnCount;
//     //             //         console.log(columnCount)
//     //             //     }
//     //             // }
//     //             console.log("length of output " + output.length)
//     //             for (let i = 1; i < output.length; i++) {
//     //                 let lastRow = output[i];
//     //                 if (lastRow[dataSpecificColumn] == userCriteria) {
//     //                     returnUserDetail.push(lastRow);
//     //                     console.log(returnUserDetail)
//     //                 } else {
//     //                     if (returnUserDetail.length === 0) {
//     //                         console.log("No data found");
//     //                     }
//     //                 }

//     //             }
//     //             console.log("length of csv header " + csvHeader.length);
//     //             for (let i = 0; i < csvHeader.length; i++) {


//     //                 // if((returnUserDetail[random])[i] === "SKIP") {
//     //                 // }
//     //                 // else{
//     //                 newHeaderObj[csvHeader[i]] = (returnUserDetail[random])[i];
//     //                 console.log(newHeaderObj[csvHeader[i]] + "1234567890 " + [i])

//     //                 // }
//     //             }
//     //         });
//     //     fs.createReadStream(dataTablePath + '/' + sheet_Name).pipe(parser);
//     //     console.log("Data Sheet Path ----------> " + dataTablePath + '/' + sheet_Name);
//     //     do {
//     //         browser.pause(10000);
//     //         console.log("newHeaderObj is ", newHeaderObj)

//     //     } while (newHeaderObj === null);
//     //     console.log("newHeaderObj is ", newHeaderObj)
//     //     return newHeaderObj;
//     // }
//     // //datatablevalue
//     // console.log("........ ", datatablevalue);

//     // let launchingUrl = datatablevalue.url;
//     // console.log("Launching Url ------------> " + launchingUrl);
//     // let pageNameTestData = datatablevalue.pageName;
//     // let loginUserName = datatablevalue.userName;
//     // let loginPassword = datatablevalue.PassWord;
//     // console.log("PageName: ------------>" + pageNameTestData);
//     // console.log("Username: ------------>" + loginUserName);
//     // console.log("Password: ------------>" + loginPassword);

//     // module.exports.pageNameTestData = datatablevalue.pageName;
//     // module.exports.loginUserName = datatablevalue.userName;
//     // module.exports.loginPassword = datatablevalue.PassWord;
//     // console.log("Action PageName: -------> " + pageNameTestData);
//     // browser.url(launchingUrl);
//     // browser.pause(8000);

//     // return browser

// });