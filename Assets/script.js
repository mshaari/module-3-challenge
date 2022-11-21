// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  var characterCount= window.prompt("How many characters do you want (8-128)?");
  //need to add response validation
  if (characterCount < 8 || characterCount > 128) {
    window.alert("Your input must be a number between 8 and 128.");
    var characterCount= window.prompt("How many characters do you want (8-128)?");
  }

  var lowercase= window.confirm("Do you want lowercase letters? If yes, hit OK.");
  var uppercase= window.confirm("Do you want uppercase letters? If yes, hit OK.");
  var numeric= window.confirm("Do you want numeric characters? If yes, hit OK.");
  var special= window.confirm("Do you want special characters? If yes, hit OK.");

  if (lowercase ==false && uppercase ==false && numeric ==false && special ==false) {
    window.alert("You must select at least one character type.");
    var lowercase= window.confirm("Do you want lowercase letters? If yes, hit OK.");
    var uppercase= window.confirm("Do you want uppercase letters? If yes, hit OK.");
    var numeric= window.confirm("Do you want numeric characters? If yes, hit OK.");
    var special= window.confirm("Do you want special characters? If yes, hit OK.");
  }

  
  //IN THIS AREA, NEED TO MAKE THE ACTUAL PASSWORD GENERATOR WITH CHARACTERS
  //ideas: maybe designate each spot a number and assign it a value using a for loop
  //one for loop version for each permutation of characters

  var password= "";
  
  for (var x = 0; x <= characterCount; x++) {
    function getRandomInt() {
      return Math.floor(Math.random() * 4);
    }
      
    var randomType = getRandomInt();
    
    if (lowercase==true && randomType == 1) {  //lowercase option
        function generateLowercase() {
          var lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
          return lowercaseAlphabet[Math.floor(Math.random() * lowercaseAlphabet.length)];
          }

        var newCharacter= generateLowercase();
        password += newCharacter;
      } else if (uppercase==true && randomType == 2) {  //uppercase option
          function generateUppercase() {
            var uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            return uppercaseAlphabet[Math.floor(Math.random() * uppercaseAlphabet.length)];
            }

            var newCharacter= generateUppercase();
            password += newCharacter;
      } else if (numeric==true && randomType == 3) { //numeric option
          function generateNumeric() {
            return Math.floor(Math.random() * 9);
            }

          var newCharacter= generateNumeric();
          password += newCharacter;
      } else if (special==true && randomType == 4) { //special character option
          function generateSpecial() {
            var specialCharacters = "\u0020 \u0022 !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
            return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
            }

          var newCharacter= generateSpecial();
          password += newCharacter;
        } 
  }

  return password;
  //MAYBE JUST MAKE THIS finalPassword= password; AND THEN IN function writePassword() change "password" to "finalPassword"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//DONT FORGET THE CASE THAT IS WHAT IF IT DOESNT INCLUDE ONE OF THE REQUIRED THIGNS