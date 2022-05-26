// Assignment code here
function generatePassword(){

  let newPassword = [];
  const tryAgain = "Click generate password to try again";

  const characterTypes = {
    n: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    l: "abcdefghijklmnopqrstuvwxyz".split(""),
    u: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
    s: '!@#$%^&*()'.split('')
  }

  // is this a string?
    const passwordLength = prompt("How long would you like your password to be? Choose a number between 8 and 128.");
  if (passwordLength >= 8 && passwordLength <= 128){
    var chosenCriteria = passwordCriteria();
  } else if (passwordLength < 8){
    alert("Number is too small. Please choose a number between 8 and 128.");
    return tryAgain;
  } else if (passwordLength > 128){
    alert("Number is too large. Please choose number between 8 and 128.");
    return tryAgain;
  } else {
    alert("Please choose number between 8 and 128.");
    return tryAgain;
  }

  function passwordCriteria(){

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
// from the user defined password length. Will now use as a counter for the function below.
  let lengthCounter = passwordLength;

  chosenCriteria.forEach((letterToFind) => {
    const characterLength = characterTypes[letterToFind].length;
    const randomCharacterTypeIndex = Math.floor(Math.random() * characterLength);
    newPassword.push(characterTypes[letterToFind][randomCharacterTypeIndex]);
    lengthCounter -= 1;
  });

  for (let x=lengthCounter; x>0; x -= 1){
    const randomChosenCriteriaIndex = Math.floor(Math.random() * chosenCriteria.length);
    const characterToFindType = chosenCriteria[randomChosenCriteriaIndex];
    const characterLength = characterTypes[characterToFindType].length;
    const randomCharacterTypeIndex = Math.floor(Math.random() * characterLength);
    const chosenCharacter = characterTypes[characterToFindType][randomCharacterTypeIndex]
    newPassword.push(chosenCharacter);
  }

  const newUserPassword = jumbler()

  function jumbler(){
    let unJumbledPassword = newPassword;
    let jumbledPassword = [];
    for (let x=unJumbledPassword.length; x>0; x -= 1){
      const randomPasswordIndex = Math.floor(Math.random() * unJumbledPassword.length);
      jumbledPassword.push(unJumbledPassword.splice(randomPasswordIndex, 1));
    }
    return jumbledPassword.join("");
  }

  return newUserPassword;

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