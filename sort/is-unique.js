/*
Implement an algorithm to determine if a string has unique characters. What if you cannot use additional data structures?

EXAMPLE: 'catscradle'

Q: What does it mean, if I can't use additional data structures? As in I can't convert the string into an array or object?
Q: What do I know about the problem? 

I know that I have a string of characters. I can loop through each character. I could track how many characters show up.
If at any point, a character has dup, I can return false that the string is unique.

*/

const input = "catscradle";

const determineUnique = (input) => {
  console.log(input);
  const dict = {};
  for (let i = 0; i < input.length; i++) {
    if (dict[input[i]]) {
      dict[input[i]] += 1;
      console.log("duplicate character exists");
      return false;
    } else {
      dict[input[i]] = 1;
    }
  }
  console.log(dict, "no duplicate!");
  return true;
};

determineUnique(input);
