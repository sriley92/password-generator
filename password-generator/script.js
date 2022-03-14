// Let's create a password!

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyx";
var numbers = "0123456789";
var specialChar = "!@#$%^&*()?/;:~";

//added userSelection & finalPassword var
var userSelection =[]; 

var finalPassword = [];

function generatePassword () {

//added userSelection & finalPassword var
var userSelection = ''; 
var finalPassword = '';

var passLength = prompt("Please insert a number between 8 to 128");
//remember to add a condition where IF  the user choose less than 8 or greater than 128 to stop and alert them to follow instruction. Then ask initial question again 
if (passLength <8 ) {
  alert ("Please insert a number between 8 to 128");
  return;
}
if (passLength >128 ) {
alert ("Please insert a number between 8 to 128");
return;
}

//added upperCase/lowerCase confirm var
var upperC = confirm("Would you like Uppercase Letters");
if(upperC) {
  userSelection = userSelection.concat(upperCase);
} 

var lowerC = confirm("Would you like Lowercase Letters");
if(lowerC) {
  userSelection = userSelection.concat(lowerCase);
}
//added remaining specChar and numb var
var specC = confirm("Would you like and Special Characters");
if(specC) {
  userSelection = userSelection.concat(specialChar);
}

var numb = confirm("Would you like to add Numbers to your password?"); 
if(numb) { 
  userSelection = userSelection.concat(numb);
}
console.log("user selection = " + userSelection);

//added if statement) NEED definition of what this is doing
if (userSelection.length ===0)   return;

// for loop with random index to create random char 
for (var i = 0; i < passLength ; i++) {
  var randomIndex = Math.floor(Math.random() * userSelection.length);
  var random = userSelection[randomIndex]; 
  finalPassword = finalPassword.concat(random)
}

return finalPassword
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
