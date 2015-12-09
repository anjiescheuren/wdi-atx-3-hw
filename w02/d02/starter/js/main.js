// Make sure to psuedocode out your adventure!!!
// One way to get input is to use the prompt() command
// You can have your adventure play out using alerts or in the console using console.log().

//How old are you? If age < 13 - "You know nothing, Jon Snow. You're too young to play." If age >= 13 - "Good luck. You'll need it."
var age = prompt("How old are you?");
var face;
age = parseInt(age);
if (age < 13) {
  console.log("You know nothing, Jon Snow. You're too young to play.");
}
else if (age >= 13) {
  console.log("Good luck. You'll need it.");
}
else {
  console.log("Try again");
}

var settle = prompt("You have travelled from a faraway planet and have decided to fight in the Game of Thrones. When you play the Game of Thrones, there is no middle-ground. You either win or you die. In order to be competitive, you need to find a place to settle. Where would you like to settle - Braavos, King's Landing, or Dorne?")

if (settle === "Braavos") {
  prompt("Do you have a face? yes or no");
  if (face === "yes" || face === "Yes") {
  console.log("Winter is coming. You're dead.");
}
else if (face === "no" || face === "No") {
  console.log("The throne is yours.");
}
else {
  console.log("Try again");
}

}
//"In order to be competitive, you need to find a place to settle.)
//"You have travelled from a faraway planet and have decided to fight in the Game of Thrones.
//When you play the Game of Thrones, there is no middle-ground. You either win or you die."
//"In order to be competitive, you need to find a place to settle.
//"Where would you like to settle? Braavos, King's Landing or Dorne?"
//If Braavos, "Do you have a face?" Yes - Winter is coming. Dead. No - The throne is yours.
//If King's Landing, "What color is your hair? Black, Blonde or Red?" Blonde - Winter is coming. Dead. Brown or Red - The throne is yours.
//If Dorne, "Are you a woman?" Yes - The throne is yours. No - Winter is coming. Dead.
