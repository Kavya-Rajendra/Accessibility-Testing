let relativePath = require('path');
let {
    defineSupportCode
} = require('cucumber');
const AxeReports = require('axe-reports');
const axeSource = require('axe-core').source;
var assert = require('assert');

//   var selectedUser = require(relativePath.resolve('stepDefinitions/testURL.js'));
// console.log(selectedUser, 'ind')

const axe = require('axe-core');
const {
    doesNotMatch
} = require('assert');
// var dataTableValue = require(relativePath.resolve(''));

const axeConfig = {
    runOnly: {
        type: "tag",
        values: ['wcag2a', 'wcag2aa', 'section508'],
    },
    rules: {
        "color-contrast": {
            enabled: true
        },
        "definition-list": {
            enabled: false
        },
    },
    reporter: "v1",
    resultTypes: [
        "violations",
        "incomplete",
        "inapplicable"
    ]
};

const axeExcludes = {
    exclude: [
        ['#mock-header'],
        ['#mock-layout-side'],
        ['#mock-footer']
    ]
};

defineSupportCode(function({
            Given,
            When,
            Before,
            Then,
            After
        }) {

            Then('I check accessibility violations with the Axe Core', () => {
                       console.log('started doing accessibility...........', selectedUser.pageName)
                        let results = browser.executeAsync(function(axeExcludes, axeConfig, done) {
                            console.log(selectedUser1)
                            browser.execute(axeSource);
                            //axe.run(axeExcludes, axeConfig, function(err, results) {
                            axe.run(axeExcludes, axeConfig, function(err, results) {

                                browser.pause(20000)
                                console.log("1111111")
                                if (err) done(err)
                                console.log("1111111")
                                done(results);

                                let axeViolations = results.value.violations.length;
                                let report = results.value.violations;

                                let textresult = '';
                                textresult = "\n *************************************** PAGE NAME : " + selectedUser.pageName + " ***********************************";

                                for (var i = 0; i < axeViolations; i++) {
                                    var tempJSON = JSON.parse(JSON.stringify(report[i], ["description", "help", "impact", "tags", "nodes", "failureSummary", "any", "message", "target", "html"], '\t'));

                                    textresult = textresult + "\n VIOLATION # " + (i + 1);
                                    textresult = textresult + "\n IMPACT: " + tempJSON["impact"];
                                    textresult = textresult + "\n DESCRIPTION: " + tempJSON["description"];
                                    textresult = textresult + "\n HELP TEXT: " + tempJSON["help"];
                                    textresult = textresult + "\n TAGS: " + tempJSON["tags"];
                                    textresult = textresult + "\n FAILURECOUNT: " + tempJSON["nodes"].length;
                                    textresult = textresult + "\n ";

                                    for (var j = 0; j < tempJSON["nodes"].length; j++) {

                                        textresult = textresult + "\n FAILEDCOMPONENT " + (j + 1) + ":" + JSON.stringify(tempJSON["nodes"][j]["target"]);
                                        textresult = textresult + "\n FAILEDCOMPONENTSOURCE " + (j + 1) + ":" + JSON.stringify(tempJSON["nodes"][j]["html"]);
                                        textresult = textresult + "\n FAILEDCOMPONENT FIX " + (j + 1) + ":" + JSON.stringify(tempJSON["nodes"][j]["failuresummary"]);
                                        textresult = textresult + "\n"
                                    }
                                    textresult = textresult + "\n \n"
                                }

                                var fs = require('fs');
                                let path = 'csv path';
                                fs.appendFile(path, textresult, function(err) {
                                    if (err) throw err;
                                    console.log('Violations data saved to csv file');
                                });

                                assert.equal(report.length, 0, 'Excepted no ally violations. Found ' + report.length + 'violations:' + textresult);



                            });
                        }, axeExcludes, axeConfig);

                        // let axeViolations = results.value.violations.length;
                        // let report = results.value.violations;

                        // let textresult = '';
                        // textresult = "\n *************************************** PAGE NAME : " + dataTableValue.pageNameTestData + " ***********************************";

                        // for (var i = 0; i < axeViolations; i++) {
                        //     var tempJSON = JSON.parse(JSON.stringify(report[i], ["description", "help", "impact", "tags", "nodes", "failureSummary", "any", "message", "target", "html"], '\t'));

                        //     textresult = textresult + "\n VIOLATION # " + (i + 1);
                        //     textresult = textresult + "\n IMPACT: " + tempJSON["impact"];
                        //     textresult = textresult + "\n DESCRIPTION: " + tempJSON["description"];
                        //     textresult = textresult + "\n HELP TEXT: " + tempJSON["help"];
                        //     textresult = textresult + "\n TAGS: " + tempJSON["tags"];
                        //     textresult = textresult + "\n FAILURECOUNT: " + tempJSON["nodes"].length;
                        //     textresult = textresult + "\n ";

                        //     for (var j = 0; j < tempJSON["nodes"].length; j++) {

                        //         textresult = textresult + "\n FAILEDCOMPONENT " + (j + 1) + ":" + JSON.stringify(tempJSON["nodes"][j]["target"]);
                        //         textresult = textresult + "\n FAILEDCOMPONENTSOURCE " + (j + 1) + ":" + JSON.stringify(tempJSON["nodes"][j]["html"]);
                        //         textresult = textresult + "\n FAILEDCOMPONENT FIX " + (j + 1) + ":" + JSON.stringify(tempJSON["nodes"][j]["failuresummary"]);
                        //         textresult = textresult + "\n"
                        //     }
                        //     textresult = textresult + "\n \n"
                        // }

                        // var fs = require('fs');
                        // let path = 'csv path';
                        // fs.appendFile(path, textresult, function(err) {
                        //     if (err) throw err;
                        //     console.log('Violations data saved to csv file');
                        // });

                        // assert.equal(report.length, 0, 'Excepted no ally violations. Found ' + report.length + 'violations:' + textresult);
                    });
                })
