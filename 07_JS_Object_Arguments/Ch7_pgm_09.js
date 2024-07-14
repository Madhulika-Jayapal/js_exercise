// Finding a character with indexOf

var message = "We choose to go to the Moon!";

var charIndex = message.indexOf("M");
console.log(message.substr(charIndex, 3));

var indexGo = message.indexOf("go");
console.log("Index of 'go': " + indexGo);

var indexChoose = message.indexOf("choose");
console.log("Index of 'choose': " + indexChoose);
console.log(message.substr(indexChoose, 6)); 

var lastIndexMoon = message.lastIndexOf("oo");
console.log("Last index of 'oo' in 'Moon': " + lastIndexMoon);
console.log(message.substr(lastIndexMoon, 2));

/* Further Adventures
 *
 * 1) Use indexOf to find the index of where the
 *    word 'go' starts in the message string.
 *
 * 2) Use indexOf and substr to display the word
 *    'choose' from the message string.
 *
 * There is also a lastIndexOf string method.
 *
 * 3) Use lastIndexOf to find the index of the
 *    'oo' in the word 'Moon' of the message string.
 *
 */