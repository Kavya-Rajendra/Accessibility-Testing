const { getRows } = require('./utils/csvUtils.js')

const {
    defineSupportCode
} = require('cucumber');
let relativePath = require('path');
let fs = require('fs');
//let sleep = require('system-sleep');
let csv = require('csv/lib');
let assert = require('assert');
//let request = require('sync-request');
let dom = require('xmldom').DOMParser;
let XMLserializer = require('xmldom').XMLSerializer;
var csvWriter = require('csv-write-stream');
const {
    Console
} = require('console');
const {
    default: url
} = require('webdriverio/build/commands/browser/url');
let objectLoader = require(relativePath.resolve('stepDefinitions/pageObjects.js'));
//let xpathObject = objectLoader.objectLoader();
var selectedUser;
let kavya;
// let screenshotFolder = relativePath.resolve('config/screenshots'),
let dataTablePath = relativePath.resolve('config/testData'),
    // env =global.browser.desiredCabilities.env,
    // channel = global.browser.desiredCabilities.channel,
    newHeaderObj = {},
    newObject = {},
    csvHeader,
    brandLaunching = "",
    envURLLaunching = "",
    urlFromMIPage,
    returnUserDetail = [],
    screenShotConfigID,
    random,
    writer,
    validationScreenshotPath;



defineSupportCode(function({
    Given,
    When,
    Before,
    Then,
    After
}) {
    //import {Given, Then, When, After, BeforeAll, Before} from 'cucumber'; 

    // Before(function(scenarioResult) {
    //     console.log("before test")
    //     browser.url("google.com")
    // const scenario = scenarioResult.scenario;
    // screenShotConfigID =scenario.name.substr(0, scenario.name.indexOf("#"));
    // });
    var info = require('testable-utils').info;

    // true when run locally, false when run on testable
    var isLocal = require('testable-utils').isLocal
    // After(function(scenarioResult) {
    //     let finalOutput = [];
    //     console.log("after")
    //     if (screenShotConfigID !== 'NoConfigID') {
    //         if (scenarioResult.isFailed()) {
    //             finalOutput = [screenShotConfigID, "Failed", env, validationScreenshotPath];
    //             writer = csvWriter({
    //                 headers: ["ConfigID", "Status", "Environment", "ScreenShotPath"],
    //                 sendHeaders: false
    //             });
    //             writer.pipe(fs.createWriteStream('result.csv', {
    //                 flags: 'a'
    //             }));
    //             writer.write(finalOutput);
    //             writer.end();
    //         } else {
    //             finalOutput = [screenShotConfigID, "Passed", env, validationScreenshotPath];
    //             writer = csvWriter({
    //                 headers: ["ConfigID", "Status", "Environment", "ScreenShotPath"],
    //                 sendHeaders: false
    //             });
    //             writer.pipe(fs.createWriteStream('result.csv', {
    //                 flags: 'a'
    //             }));
    //             writer.write(finalOutput);
    //             writer.end();
    //         }
    //     }

    // });
    

    Given('I am testing accessibility', () => {
        kavya = 'nitin';
        console.log('qwerty')
        console.log("@@@@@@@@@@@@@@@@@" + kavya);

    });
       
    console.log("@@@@@@@@@@@@@@@@@" + kavya);
     When('I launch the url {string}', async(arg2) => {
        console.log("i am here" + arg2);
        const [user] = arg2.split('_');
        const rows = await getRows(__dirname + '/../config/testData/iss_testdatasheet.csv')

            const [header, ...data] = rows;
            //console.log(header,data)
            const records = data.map((row) => {
            const obj = {};
            for (let i = 0; i < header.length; i++) { obj[header[i]] = row[i]; }
            return obj;

        });
        
        
        selectedUser = records.find(rec => rec.dataSpecific === user)
        console.log(selectedUser, '=')
        //console.log('records are',   records, "      " ,selectedUser, "     ", user);
        browser.url(selectedUser.url)
        console.log(selectedUser.url);
        console.log(selectedUser.pageName)
       
        
        
       // browser.url();
        //browser.pause(50000);
        
        //return browser

    });

    console.log("@@@@@@@@@@@@@@@@@" + kavya);
});
