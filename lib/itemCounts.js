/**
 * Given an input Array, returns an object containing the count of each item in the input.
 *
 * @param {Array} array - The array of items to count
 * @returns {object} An object containing the counts of the items in the input array
 */
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
  console.log(itemCounts(boop));
  console.log(itemCounts(weeb));
  console.log(itemCounts(waffles));

}
module.exports = itemCounts;
