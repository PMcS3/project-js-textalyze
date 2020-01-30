/**
 * Given an input Array, returns an object containing the count of each item in the input.
 *
 * @param {Array} array - The array of items to count
 * @returns {object} An object containing the counts of the items in the input array
 */

function stringToCharacters(string) {
  let testArray = string.split("");
  return testArray;
}

function itemCounts(array) {
  let counts = {};
  for (let i = 0; i < array.length; i++)
  {
    if(counts.hasOwnProperty(array[i]) === false)
    { counts[array[i]] = 1;
    }
    else
    {
      counts[ array[i] ] += 1;
    }
  }

  return counts;
}

if (require.main === module)
{
  let boop = [];
  boop = ['A', 'B', 'C', 'D'];
  let weeb = [];
  weeb = ['Deep', 'Wide', 'Tall', 'Round', 'Deep', 'Wide'];
  let waffles = [];
  waffles = ['waffle', 'pancake', 'muffin', 'muffin', 'scone'];
  console.log(itemCounts(stringToCharacters("She sells sea shells by the sea shore.")));
  console.log(itemCounts(stringToCharacters("I only love my bed and my mama, I'm sorry.")));
  console.log(itemCounts(stringToCharacters("It was a dark and stormy night...")));

}
module.exports = itemCounts;
