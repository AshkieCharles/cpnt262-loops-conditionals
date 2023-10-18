/* */

const reverseString = "alucarD";

let newString = '';
/* The minus one is to prevent an undefined from forming as the length of the string is larger than the original string we had. */
/* The loop keeps going until the every letter of the string is reversed. */
for (let i = reverseString.length - 1; i >= 0; i--) {
  /* The new string will have its letters replaced by whatever letter is in position i */
  newString += reverseString[i];
}

console.log(newString);
/* Break                          */

/* This will be the sentence we will use to find the longest word, the answer should be predicament */
const exampleSentence = "Crow was not happy with his predicament"
const anotherExampleSentence = "Anakin really hated the sand"


function theLongestWord(str) {
  /* We make an empty variable to put strings into it */
  let longestWord = '';
  /* We put the different words within the sentence into an array with this the split to easily count the words in them. */
  let words = str.split(" ")
  

  for (let i = 0; i < words.length; i += 1){
    /* This variable is the string of whatever position i is in in words*/
    let singleWords = words[i];
    /* If the string's length is longer than whatever was inside the longestword variable, it stays that string until another larger one is given. */
    if (singleWords.length > longestWord.length) {
      longestWord = singleWords;
    } else {
      console.log();
    }
  }
    return longestWord
}

/* Runs the function on the variable we had for the sentence */
console.log(theLongestWord(exampleSentence))

