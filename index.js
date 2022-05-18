// Assignment code here
function generatePassword(){

  const characterTypes = {
    n: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    l: "abcdefghijklmnopqrstuvwxyz".split(""),
    u: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
    s: '!@#$%^&*()'.split('')
  }

    const passwordLength = prompt("How long would you like your password to be? Choose a number between 8 and 128.");
  // empty string best practices?
  if (passwordLength >= 8 && passwordLength <= 128){
    var chosenCriteria = passwordCriteria();
  } else if (passwordLength < 8){
    alert("Number is too small. Please choose a number between 8 and 128.");
  } else if (passwordLength > 128){
    alert("Number is too large. Please choose number between 8 and 128.");
  } else {
    alert("Please choose number between 8 and 128.")
  }
console.log(chosenCriteria);

  function passwordCriteria(){
    // infinite while loop, best practice?
    let choosenCharacters = true;
    while (choosenCharacters){
      const criteria = prompt("Choose the types of characters you would like your password to have.\n\nL: lowercase, U: for uppercase, N: for numbers, S: for special characters.\n\nFor example:\n Type LU if you would like your password to include lower and uppercase letters.\nType S if you would like the password to only include special characters.");
      const validateCriteria = /[^luns]/ig.test(criteria);
      if (validateCriteria === true){
        alert("You can only write the characters 'U', 'N', 'S', or 'L'. Case and order does not matter.");
      } else {
        choosenCharacters = false;
        let criteriaToArray = criteria.split("")
        let lowerCriteria = criteriaToArray.map((letter) => letter.toLowerCase());
        let duplicatesRemoved = [... new Set(lowerCriteria)];
        return duplicatesRemoved;
      }
    }
  }

  // TODO: make a function that will determine how the constants will be iterated through
  


}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);