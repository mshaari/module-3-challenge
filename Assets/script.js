// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  var password;
  var characterCount= window.prompt("How many characters do you want (8-128)?");
  //need to add response validation
  if (characterCount < 8 || characterCount > 128) {
    window.alert("Your input must be a number between 8 and 128.")
    var characterCount= window.prompt("How many characters do you want (8-128)?");
  }

  var lowercase= window.confirm("Do you want lowercase letters? If yes, hit OK.");
  var uppercase= window.confirm("Do you want uppercase letters? If yes, hit OK.");
  var numeric= window.confirm("Do you want numeric characters? If yes, hit OK.");
  var special= window.confirm("Do you want special characters? If yes, hit OK.");

  if (lowercase !=="OK" && uppercase !=="OK" && numeric !=="OK" && special !=="OK") {
    window.alert("You must select at least one character type.");
    var lowercase= window.confirm("Do you want lowercase letters? If yes, hit OK.");
    var uppercase= window.confirm("Do you want uppercase letters? If yes, hit OK.");
    var numeric= window.confirm("Do you want numeric characters? If yes, hit OK.");
    var special= window.confirm("Do you want special characters? If yes, hit OK.");
  }

  
  //IN THIS AREA, NEED TO MAKE THE ACTUAL PASSWORD GENERATOR WITH CHARACTERS
  //ideas: maybe designate each spot a number and assign it a value using a for loop
  //one for loop version for each permutation of characters

  //THIS FOR LOOP IS IN THE CASE THAT THEY CHOSE TO HAVE ALL FOUR CHARACTERS
  for (var x = 0; x < characterCount; x++) {
    function getRandomInt() {
      return Math.floor(Math.random() * 4);
    }
      
    var randomType = getRandomInt();
    
    //lowercase option
    if (randomType == 1) {
        function generateLowercase() {
        var lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz"
        return lowercaseAlphabet[Math.floor(Math.random() * lowercaseAlphabet.length)]
        }

        var newCharacter= generateLowercase();
        password= password + newCharacter;
      } else {
      password=password;
    }
    
    //uppercase option
    if (randomType == 2) {
      function generateUppercase() {
        var uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        return uppercaseAlphabet[Math.floor(Math.random() * uppercaseAlphabet.length)]
        }

        var newCharacter= generateUppercase();
        password= password + newCharacter;
      } else {
      password=password;
    }
    
    //numeric option
    if (randomType == 3) {
      function generateNumeric() {
        return Math.floor(Math.random() * 9);
      }

      var newCharacter= generateNumeric();
      password= password + newCharacter;
    } else {
      password=password;
    }
    
    //special character option
    if (randomType == 4) {
      function generateSpecial() {
        var specialCharacters = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
        return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
        }

        var newCharacter= generateSpecial();
        password= password + newCharacter;
    }
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

window.alert(passwordText)