// Assignment Code

const specialChar = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];
// console.log(specialChar[6]);

const lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// console.log(lower.length);

const upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W","X", "Y", "Z"];
// console.log(upper.length) 

const numeric = [0,1,2,3,4,5,6,7,8,9];
// console.log(number[5]);
var selected = [];
var generateBtn = document.querySelector("#generate");
var number = 0

var userInput = {
  PwLength: number,
  PwIncludes: selected
}

function getPasswordOptions(){
  number = parseInt(prompt("How long would you like your password be?"));
  // console.log(number);
  // while (number)
  if(number === 7 || number < 7 || number === 129 || number > 129){
    alert("Password must be at least 8 characters and maximum 128 characters")
  }
  // How do I get this to work?
  if(number === upper || number === lower){
    alert("Must be a number to generate a password")
  }
  if(number >= 8 && number <= 128){
    
  var specialCharboo = confirm("Would you like special characters in your password?")
  var lowerboo = confirm("Would you like lower case letters in your password?")
  var upperboo = confirm("Would you like upper case letters in your password?")
  var numericboo = confirm("Would you like numbers in your password?")
  }
  if(specialCharboo === false && lowerboo === false && upperboo === false && numericboo === false){
    alert("Could not generate password")
  }
  if(specialCharboo === true){
    selected = selected.concat(specialChar);
    // console.log(selected)
  }
  if(lowerboo === true){
    selected = selected.concat(lower)
  }

  if(upperboo === true){
    selected = selected.concat(upper)
  }

  if(numericboo === true){
    selected = selected.concat(numeric)
  }
}
getPasswordOptions();


// Write password to the #password input

 var randomItem = function (selected){
    return selected[Math.floor(Math.random()*selected.length)]
  }
  // console.log(randomItem(selected));
  
  // console.log(newPassword);
  // var newPassword = toString(randomItem(selected));

  function writePassword() {
    
    var password = generatePassword();
    // console.log(password);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    // return selected.join('')
  }

  var newPassword = []

  function generatePassword() {
    
    // will for loop be in here to generate password?
    for (var i = 0; i < number; i++){
       var randomizedCharacter = randomItem[i];
       newPassword.push(randomizedCharacter);
      //  return newPassword.join('')
    }
  }
  generatePassword();
  console.log(newPassword);


// Add event listener to generate button
// will writePassword be the function so that can be called? Is that possible?
generateBtn.addEventListener("click", writePassword)
  
