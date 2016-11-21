'use strict';

//Pregunta 1
var question1 = 'what is your name?';
var username = prompt(question1);
if (username === ''){
  username = 'Anonoymous';
}

console.log('Questoin 1: ' + question1);
var response1 = 'It is a pleasure to meet you ' + username + '.';
alert(response1);
console.log('Response1: ' + response1);



//Pregunta 2
var question2 = 'Do I like coffee?';
var coffee = prompt(question2).toLowerCase();
console.log('Question2: ' + question2);
var response2;

if (coffee === 'yes' || coffee === 'y') {
  response2 = 'Correct!';
} else if (coffee === 'no' || coffee === 'n') {
  response2 = 'WRONG!';
} else {
  response2 = 'The answer was yes.';
}

alert(response2);
console.log('Response2: ' + response2);



//Pregunta sobre la edad! Pregunta 3
var question3 = 'Am I 25?';
var age = prompt(question3).toLowerCase();
console.log('Question3: ' + question3);
var response3;

if (age === 'yes' || age === 'y') {
  response3 = 'Yup';
} else if (age === 'no' || age === 'n') {
  response = 'WRONG!';
} else {
  response3 = 'You where close.';
}

alert(response3);
console.log('Response3:' + response3);



//pregunta 4
var question4 = 'Te gusta Metallica?';
var beer = prompt(question4).toLowerCase();
console.log('Question4' + question4);
var response4;

if (beer === 'yes' || beer === 'y' === 'si') {
  response4 = 'Bueno...';
} else if (beer === 'no' || beer === 'n'){
  response4 = 'Hmmm...';
} else {
  response4 = 'ridículo...';
}

alert(response4);
console.log('Response4: ' + response4);


//Pregunta 5
var question5 = 'Do I like to code?';
var code = prompt(question5).toLowerCase();
console.log('Question5: ' + question5);
var response5;

if (code === 'yes' || code === 'y') {
  response5 = 'Cool lets code';
} else if (code === 'no' || code === 'n'){
  response5 = 'Do you even code bro?';
} else {
  response5 = 'The answer was yes bro';
}

alert(response5);
console.log('Response: ' + response5);
//fin
//Trying to figure out the best way to space out my code to make it more readable...
