// Assignment Code
//WHAT DOES THIS DO??
var generateBtn = document.querySelector("#generate");

//This function is the bulk of this project -- it is what actually generates the password. For simplicity's sake, comments will be added within the function to explain its functionality
function generatePassword () {
  //This asks the user how many characters they want their password to be and logs their response in a variable called characterCount
  var characterCount= window.prompt("How many characters do you want (8-128)?");

  //This confirms that the number of characters the user entered is between 8 and 128; if not, it informs them of their error and makes them re-answer
  if (characterCount < 8 || characterCount > 128) {
    window.alert("Your input must be a number between 8 and 128.");
    var characterCount= window.prompt("How many characters do you want (8-128)?");
  }
  //THERE IS AN ERROR HERE BECASUE ON THE SECOND TIME AROUND YOU COULD TECHNICALLY INSERT THE WRONG AMT (ASK ERIK ABOUT THIS I GUESS)

  //This series of prompts ask the user whether they want lowercase characters, uppercase characters, numeric characters, and/or special characters. It does so using window.confirm, so they click "OK" (boolean set to true) if they want that type of character and "cancel" (boolean set to false) if they do not 
  var lowercase= window.confirm("Do you want lowercase letters? If yes, hit OK.");
  var uppercase= window.confirm("Do you want uppercase letters? If yes, hit OK.");
  var numeric= window.confirm("Do you want numeric characters? If yes, hit OK.");
  var special= window.confirm("Do you want special characters? If yes, hit OK.");

  //This confirms that the user selected at least one type of character; if they did not, it makes them reanswer all the prompts
  if (lowercase ==false && uppercase ==false && numeric ==false && special ==false) {
    window.alert("You must select at least one character type.");
    var lowercase= window.confirm("Do you want lowercase letters? If yes, hit OK.");
    var uppercase= window.confirm("Do you want uppercase letters? If yes, hit OK.");
    var numeric= window.confirm("Do you want numeric characters? If yes, hit OK.");
    var special= window.confirm("Do you want special characters? If yes, hit OK.");
  }
  


  //for each character place, run the entire function of get the number convert to type and then insert a random number from that type-- TRY DOING ONE BIG FOR LOOP, EMBEDDING WITHIN IT AN IF STATEMENT FOR EACH CHARTYPE AND THEN WITHIN THAT ADD THAT KIND OF CHARACTER TO THE STRING (WILL HAVE SOME ORDER TO IT BUT AT LEAST ITS SOMEWHAT RANDOM)

  //This declares a string with the variable name "password" -- it will be used throughout this code to create the end password
  var password= "";

  //the lowercase+uppercase+numeric+special tallies the number of types since we have one big function for all of the different types so it only iterates the function the proper amount needed
  //THERE IS A WEIRD CASE WITH 10 CHARACTERS AND 3 TYPES since you get 3.33 so it does the function 4 times but then it gives you more than expected 

  //This for loop iterates a certain number of times -- the characterCount divided by how many character types were selected. So, if you have 8 characters with 4 different types, the for loop will iterate 8/4 times, or 2 times. As such, it will produce the proper number of characters in most cases. However, there are some exceptions, such as if characterCount=10 and you select three character types, since 10/3=3.333, so the function will iterate four times and produce 12 characters, 2 more than needed. As such, later in the code, we have a segment that shortens the password to the proper length. In essence, we need to use this form so that we can ensure the passwords will always include all the desired types of characters; however, the pattern of characters will not be random, so we will shuffle the order of the characters later on.
  for (var x = 0; x < (characterCount/(lowercase+uppercase+numeric+special)); x++) {
    //If the lowercase type was selected, it will select one random lowercase letter from the string lowercaseAlphabet and add it to the password string
    if (lowercase==true) {
      function generateLowercase() {
        var lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
        return lowercaseAlphabet[Math.floor(Math.random() * lowercaseAlphabet.length)];
        }

      var newCharacter= generateLowercase();
      password += newCharacter;
    }

    //If the uppercase type was selected, it will select one random uppercase letter from the string uppercaseAlphabet and add it to the password string
    if (uppercase==true) {
      function generateUppercase() {
        var uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return uppercaseAlphabet[Math.floor(Math.random() * uppercaseAlphabet.length)];
        }

      var newCharacter= generateUppercase();
      password += newCharacter;
    }

    //If the numeric type was selected, it will select one random number from the string numbers and add it to the password string
    if (numeric==true) {
      function generateNumeric() {
        var numbers = "0123456789";
        return numbers[Math.floor(Math.random() * numbers.length)];
        }

      var newCharacter= generateNumeric();
      password += newCharacter;
    }

    //If the special type was selected, it will select one random special character from the string specialCharacters and add it to the password string
    if (special==true) {
      function generateSpecial() {
        var specialCharacters = " !”#$%&'()*+,-./:;<=>?@[]^_`{|}~\u005C";
        return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
        }

      var newCharacter= generateSpecial();
      password += newCharacter;
    }
  }

  //This ensures the password is no longer than the character count allotted since in some cases, it may be longer than anticipated (recall the aforementioned example of if you want a 10 character password with 3 different character types since it will iterate the foor loop 4 times and then produce a 12 letter password, so this fucntion will then shorten it down to 10). Though it will often be unncesary, it does not cause any harm to the password and only ensures that it is the proper length.
  if (password.length > characterCount) {
    password = password.substring(0, characterCount);
  } 
  
  //Recall that even though we've created a password, there's still some order to it (the same pattern of characters). So, to fully randomize it, we need to shuffle characters. To do so, let's convert this string to an array.

  //This converts password string into an array called passwordArray
  var passwordArray = password.split(''); 
  
  //This for loop will iterate the characterCount number of times. It randomizes the order of the password; since it is in array form now, it essentially takes some random yth character and swaps it with a random zth character. 
  for (i = 0; i < characterCount; i++) {
    var y = Math.floor(Math.random() * characterCount);
    var z = Math.floor(Math.random() * characterCount);
    var original = passwordArray[y]; //This sets a var original to the yth element in passwordArray
    passwordArray[y] = passwordArray[z]; //This sets the yth element in passwordArray = the zth element
    passwordArray[z] = original; //This sets the zth element equal to the original yth element
  }
  
  //This converts the array back into a string
  password = passwordArray.join(''); 

  //This returns the var password (which contains the proper password) as the result of this function
  return password;
}

// Write password to the #password input //GO OVER THIS
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button //GOOOOO OVER THISSSSSS
generateBtn.addEventListener("click", writePassword);