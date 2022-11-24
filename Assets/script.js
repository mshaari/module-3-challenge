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


  //for each character place, run the entire function of get the number convert to type and then insert a random number from that type-- TRY DOING ONE BIG FOR LOOP, EMBEDDING WITHIN IT AN IF STATEMENT FOR EACH CHARTYPE AND THEN WITHIN THAT ADD THAT KIND OF CHARACTER TO THE STRING (WILL HAVE SOME ORDER TO IT BUT AT LEAST ITS SOMEWHAT RANDOM)

  var password= "";

  //the lowercase+uppercase+numeric+special tallies the number of types since we have one big function for all of the different types so it only iterates the function the proper amount needed
  //THERE IS A WEIRD CASE WITH 10 CHARACTERS AND 3 TYPES since you get 3.33 so it does the function 4 times but then it gives you more than expected 

  for (var x = 0; x < (characterCount/(lowercase+uppercase+numeric+special)); x++) {
    if (lowercase==true) {
      function generateLowercase() {
        var lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
        return lowercaseAlphabet[Math.floor(Math.random() * lowercaseAlphabet.length)];
        }

      var newCharacter= generateLowercase();
      password += newCharacter;
    }

    if (uppercase==true) {
      function generateUppercase() {
        var uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return uppercaseAlphabet[Math.floor(Math.random() * uppercaseAlphabet.length)];
        }

      var newCharacter= generateUppercase();
      password += newCharacter;
    }

    if (numeric==true) {
      function generateNumeric() {
        var numbers = "0123456789";
        return numbers[Math.floor(Math.random() * numbers.length)];
        }

      var newCharacter= generateNumeric();
      password += newCharacter;
    }

    if (special==true) {
      function generateSpecial() {
        var specialCharacters = " !”#$%&'()*+,-./:;<=>?@[]^_`{|}~\u005C";
        return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
        }

      var newCharacter= generateSpecial();
      password += newCharacter;
    }
  }

  //this ensures the password is no longer than the character count allotted since in some cases, it may be longer than anticipated (like if you want a 10 character password with 3 different criteria since it will iterate the foor loop 4 times and then produce a 12 letter password, so this fucntion will then shorten it down to 12)
  if (password.length > characterCount) {
    password = password.substring(0, characterCount);
  } 
  
  
  //So, even though we've created a password, there's still some order to it (the same pattern of characters). So, to fully randomize it, we need to shuffle characters. To do so, let's convert this string to an array.

  var passwordArray = password.split(''); //this converts password string into an array called passwordArray
  
  for (i = 0; i < characterCount; i++) {
    var y = Math.floor(Math.random() * characterCount);
    var z = Math.floor(Math.random() * characterCount);
    var temp = passwordArray[y]; //this sets temp (temporary) to the yth element in passwordArray
    passwordArray[y] = passwordArray[z]; //this sets the yth element in passwordArray = the zth element
    passwordArray[z] = temp; //this sets the zth element equal to the original yth element
    password = passwordArray.join(''); 
  }

  return password;
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