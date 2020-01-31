function sanitize(data) 
{
  let newString = string.toUpperCase();
  let testArray = newString.split("");
  return testArray; 
}


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

const fs = require('fs');
function readFile(file_dir){
    var data = fs.readFileSync(file_dir, 'utf-8');
    return data;
}

let dick = readFile('../sample_data/moby-dick.full.txt');


module.export = readFile;

if (require.main === module)
{
console.log("Checking string to character array function:");
/*console.log(itemCounts(sanitize("She sells sea shells by the sea shore.")));
console.log(itemCounts(sanitize("I only love my bed and my mama, I'm sorry.")));
console.log(itemCounts(sanitize("It was a dark and stormy night...")))*/
console.log(itemCounts(sanitize(dick)));

}

module.exports = sanitize;
