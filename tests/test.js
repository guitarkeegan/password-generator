const lower = 'qwertyuiopasdfghjklzxcvbnm';
const upper = lower.toUpperCase();

function generatePassword (){
    const pwLength = prompt("how long?");

    const lowerBool = confirm("would you like lower case characters");
    const upperBool = confirm("would you like upper case characters");

    let generatedPass= ''
    let chosenChars = '';

    if(lowerBool) {
        chosenChars += lower
        generatedPass += lower[Math.floor(Math.random() * lower.length)]
    };
    if(upperBool) {
        chosenChars += upper
        generatedPass += upper[Math.floor(Math.random() * upper.length)]
    };

    let pwInitialLength = generatedPass.length;
    if (pwInitialLength === 0) {
        return alert("yo, please select something next time")
    }

    for(i=pwInitialLength; i<parseInt(pwLength); i++) {
        let randomIndex = Math.floor(Math.random() * chosenChars.length)
        let randomChar = chosenChars[randomIndex]
        generatedPass += randomChar
    }

    const jumbletron = jumbler(generatedPass)

    console.log(jumbletron)
}

function jumbler(newPassword){
    let unJumbledPassword = newPassword.split('');
    let jumbledPassword = [];
    for (let x=unJumbledPassword.length; x>0; x -= 1){
      const randomPasswordIndex = Math.floor(Math.random() * unJumbledPassword.length);
      jumbledPassword.push(unJumbledPassword.splice(randomPasswordIndex, 1));
    }
    return jumbledPassword.join("");
  }

function writePassword(){

}