function isPalindrome(word) {
  // Write your algorithm here
  const originalWord = word;
  
  
  const splitString = originalWord.split("")
  const reverseString = splitString.reverse()
  const reverseWord = reverseString.join("")

  if (reverseWord===originalWord){
    return true
  }else{
    return false
  }

}

/* 
  Add your pseudocode here
  //take the original string
  //break string into individual letters in a array
  //reverse the letters of the string that's in the array
  //join letters in the array into new reverse word
  //compare reverse string to the original string using if statement
  //if they are the same return true
  //if they are not the same return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
