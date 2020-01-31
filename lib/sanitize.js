//import moby from "./readFile.js"

function sanitize(string) 
{
  let newString = string.toLowerCase();
  let testArray = newString.split("");
  return testArray; 
}

const fs = require('fs');

function readFile(file_dir){
  var data = fs.readFileSync(file_dir, 'utf-8');
  return data;
}

let moby = readFile('../sample_data/moby-dick.full.txt');


function itemCounts(array) {
  let counts = {};

  for (let i = 0; i < array.length; i++)
  {
    if(counts.hasOwnProperty(array[i]) === false)
    { 
      counts[array[i]] = 1;
    }
    else
    {
      counts[ array[i] ] += 1;
    }
  }
  return counts;
}

module.export = readFile;

if (require.main === module)
{
console.log("Checking string to character array function:");
/*console.log(itemCounts(sanitize("She sells sea shells by the sea shore.")));
console.log(itemCounts(sanitize("I only love my bed and my mama, I'm sorry.")));
console.log(itemCounts(sanitize("It was a dark and stormy night...")))*/
console.log(itemCounts(sanitize(moby)));

}

module.exports = sanitize;
