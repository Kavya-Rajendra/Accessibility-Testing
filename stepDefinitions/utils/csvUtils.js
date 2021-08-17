var fs = require('fs'); 
var parse = require('csv-parse');

 

async function getRows(fileName) {
    return new Promise((res) => {
        var csvData=[];
        fs.createReadStream(fileName)
            .pipe(parse({delimiter: ','}))
            .on('data', function(csvrow) {
                csvData.push(csvrow);        
            })
            .on('end',function() {
            res(csvData)
            });
    })
}

module.exports = {
    getRows
}
