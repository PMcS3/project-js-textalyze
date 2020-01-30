const fs = require('fs');

function readFile(file_dir){
    var data = fs.readFileSync(file_dir, 'utf-8');
    return data;
}



module.export = readFile;