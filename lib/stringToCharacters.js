function stringToCharacters(string) {
  let testArray = string.split("");
  return testArray;
}
if (require.main === module)
{
console.log("Checking string to character array function:");
console.log(stringToCharacters("She sells sea shells by the sea shore."));
console.log(stringToCharacters("I only love my bed and my mama, I'm sorry."));
console.log(stringToCharacters("It was a dark and stormy night..."));

}
module.exports = stringToCharacters;