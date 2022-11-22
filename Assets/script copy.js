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

  var password= "";

  if (lowercase==true && uppercase==false && numeric==false && special==false) {
    var caseL = "abcdefghijklmnopqrstuvwxyz";
    for (var x = 0; x < characterCount; x++) {
      var randomInt = Math.floor(Math.random() * caseL.length);
      password += caseL[randomInt];
    }
  }

  if (lowercase==true && uppercase==true && numeric==false && special==false) {
    var caseLU = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var x = 0; x < characterCount; x++) {
      var randomInt = Math.floor(Math.random() * caseLU.length);
      password += caseLU[randomInt];
    }
  }

  if (lowercase==true && uppercase==true && numeric==true && special==false) {
    var caseLUN = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (var x = 0; x < characterCount; x++) {
      var randomInt = Math.floor(Math.random() * caseLUN.length);
      password += caseLUN[randomInt];
    }
  }

  if (lowercase==true && uppercase==true && numeric==false && special==true) {
    var caseLUS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ !”#$%&'()*+,-./:;<=>?@[]^_`{|}~\u005C";
    for (var x = 0; x < characterCount; x++) {
      var randomInt = Math.floor(Math.random() * caseLUS.length);
      password += caseLUS[randomInt];
    }
  }

  if (lowercase==true && uppercase==true && numeric==true && special==true) {
    var caseLUNS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !”#$%&'()*+,-./:;<=>?@[]^_`{|}~\u005C";
    for (var x = 0; x < characterCount; x++) {
      var randomInt = Math.floor(Math.random() * caseLUNS.length);
      password += caseLUNS[randomInt];
    }
  }
   
  if (lowercase==true && uppercase==false && numeric==true && special==false) {
    var caseLN = "abcdefghijklmnopqrstuvwxyz0123456789";
    for (var x = 0; x < characterCount; x++) {
      var randomInt = Math.floor(Math.random() * caseLN.length);
      password += caseLN[randomInt];
    }
  } 

  if (lowercase==true && uppercase==false && numeric==true && special==true) {
    var caseLNS = "abcdefghijklmnopqrstuvwxyz0123456789 !”#$%&'()*+,-./:;<=>?@[]^_`{|}~\u005C";
    for (var x = 0; x < characterCount; x++) {
      var randomInt = Math.floor(Math.random() * caseLNS.length);
      password += caseLNS[randomInt];
    }
  } 

  if (lowercase==true && uppercase==false && numeric==false && special==true) {
    var caseLS = "abcdefghijklmnopqrstuvwxyz !”#$%&'()*+,-./:;<=>?@[]^_`{|}~\u005C";
    for (var x = 0; x < characterCount; x++) {
      var randomInt = Math.floor(Math.random() * caseLS.length);
      password += caseLS[randomInt];
    }
  } 

  if (lowercase==false && uppercase==true && numeric==false && special==false) {
    var caseU = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var x = 0; x < characterCount; x++) {
      var randomInt = Math.floor(Math.random() * caseU.length);
      password += caseU[randomInt];
    }
  } 

  if (lowercase==false && uppercase==true && numeric==true && special==false) {
    var caseUN = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (var x = 0; x < characterCount; x++) {
      var randomInt = Math.floor(Math.random() * caseUN.length);
      password += caseUN[randomInt];
    }
  } 

  if (lowercase==false && uppercase==true && numeric==false && special==true) {
    var caseUS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ !”#$%&'()*+,-./:;<=>?@[]^_`{|}~\u005C";
    for (var x = 0; x < characterCount; x++) {
      var randomInt = Math.floor(Math.random() * caseUS.length);
      password += caseUS[randomInt];
    }
  } 

  if (lowercase==false && uppercase==true && numeric==true && special==true) {
    var caseUNS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !”#$%&'()*+,-./:;<=>?@[]^_`{|}~\u005C";
    for (var x = 0; x < characterCount; x++) {
      var randomInt = Math.floor(Math.random() * caseUNS.length);
      password += caseUNS[randomInt];
    }
  } 

  if (lowercase==false && uppercase==false && numeric==true && special==false) {
    var caseN = "0123456789";
    for (var x = 0; x < characterCount; x++) {
      var randomInt = Math.floor(Math.random() * caseN.length);
      password += caseN[randomInt];
    }
  } 

  if (lowercase==false && uppercase==false && numeric==true && special==true) {
    var caseNS = "0123456789 !”#$%&'()*+,-./:;<=>?@[]^_`{|}~\u005C";
    for (var x = 0; x < characterCount; x++) {
      var randomInt = Math.floor(Math.random() * caseNS.length);
      password += caseNS[randomInt];
    }
  } 

  if (lowercase==false && uppercase==false && numeric==false && special==true) {
    var caseS = " !”#$%&'()*+,-./:;<=>?@[]^_`{|}~\u005C";
    for (var x = 0; x < characterCount; x++) {
      var randomInt = Math.floor(Math.random() * caseS.length);
      password += caseS[randomInt];
    }
  } 

  return password;
}

// Write password to the #password input
function writePassword() {
  var finalPassword = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = finalPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//DONT FORGET THE CASE THAT IS WHAT IF IT DOESNT INCLUDE ONE OF THE REQUIRED THIGNS