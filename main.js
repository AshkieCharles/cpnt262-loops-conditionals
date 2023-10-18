const reverseString = "draculA";

let reversedString = '';
/* The minus one is to prevent an undefined from forming as the length of the string is larger than the original string we had. */
/* The loop keeps going until every letter of the string is reversed. */
for (let i = reverseString.length - 1; i >= 0; i--) {
  /* The new string will have its letters replaced by whatever letter is in position i */
  reversedString += reverseString[i];
}

console.log(reversedString);
/* Break */

let lowerSentence = 'i hate mondays'
