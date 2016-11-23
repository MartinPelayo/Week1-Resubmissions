'use strict';
var total = 0;

//Made dividers to help me sort out my code for this lab------------------------

var question1 = 'what is your name?';
var username = prompt(question1);

function firstfunction() {
  if (username === '') {
    username = 'Anonoymous';
  }
  console.log('Questoin 1: ' + question1);
  var response1 = 'nice to meet you ' + username + '.';
  alert(response1);
  console.log('Response1: ' + response1);
}
firstfunction();

//------------------------------------------------------------------------------

var question = 'Is my name Martin?';
var nameQ = prompt(question).toLowerCase();
console.log('Question: ' + question);
var response;

function secondFunction() {
  if (nameQ === 'yes' || nameQ === 'y') {
    response = 'Correct';
    total++;
  } else if (nameQ === 'no' || nameQ === 'n') {
    response = 'That is false.';
  } else {
    response = 'The anwser was yes.';
  }
}
secondFunction();
alert(response);
console.log('Response: ' + response);

//------------------------------------------------------------------------------

var question2 = 'Am I attending a school called CodeFellows?';
var coffee = prompt(question2).toLowerCase();
console.log('Question2: ' + question2);
var response2;

function thirdFunction() {
  if (coffee === 'yes' || coffee === 'y') {
    response2 = 'Correct';
    total++;
  } else if (coffee === 'no' || coffee === 'n') {
    response2 = 'That is false.';
  } else {
    response2 = 'The answer was CodeFellows.';
  }
}
thirdFunction();

alert(response2);
console.log('Response2: ' + response2);

//------------------------------------------------------------------------------

var question3 = 'Am I 25?';
var age = prompt(question3).toLowerCase();
console.log('Question3: ' + question3);
var response3;

function fourthFunction() {
  if (age === 'yes' || age === 'y') {
    response3 = 'yes' + ', right';
    total++;
  } else if (age === 'no' || age === 'n') {
    response = 'WRONG!';
  } else {
    response3 = 'Negative';
  }
}
fourthFunction();

alert(response3);
console.log('Response3');

//------------------------------------------------------------------------------

var question4 = 'Do I plan on becoming a programmer?';
var beer = prompt(question4).toLowerCase();
console.log('Question4' + question4);
var response4;

function fifthFunction() {
  if (beer === 'yes' || beer === 'y') {
    response4 = 'That is correct!';
    total++;
  } else if (beer === 'no' || beer === 'n'){
    response4 = 'Im going to be a programmer.';
  } else {
    response4 = 'Better luck next time';
  }
}
fifthFunction();

alert(response4);
console.log('Response4: ' + response4);

//------------------------------------------------------------------------------

var question5 = 'Do I like to code?';
var code = prompt(question5).toLowerCase();
console.log('Question5: ' + question5);
var response5;

function sixthFunction() {
  if (code === 'yes' || code === 'y') {
    response5 = 'That is right.';
    total++;
  } else if (code === 'no' || code === 'n'){
    response5 = 'I actually love to write code,.';
  } else {
    response5 = 'Allright, have a good day.';
  }
}
sixthFunction();

alert(response5);
console.log('Response: ' + response5);

//------------------------------------------------------------------------------

var question6 = 'Can you guess what is my favorite number?';
var response6;
var favoriteNumber = 1;
var numberGuess;

function seventhFunction() {
  for (var i = 0; i < 4; i++) {
    numberGuess = parseInt( prompt(question6) );

    if (numberGuess === favoriteNumber){
      response6 = 'Yes, thats right.' + favoriteNumber;
      alert(response6);
      total++;
      console.log('Guess' + (i + 1) + ': ' + numberGuess);
      break;
    } else if(numberGuess > favoriteNumber) {
      response6 = 'too high.';
    } else if(numberGuess < favoriteNumber){
      response6 = 'too low';
    } else {
      response6 = 'that is not a number.';
    }
    alert(response6);
    console.log('Response' + (i + 1) + ':' + response6);
  }
}
seventhFunction();



//------------------------------------------------------------------------------

var question7 = 'Can you guess a state that I have lived in?';
var response7;
var stateGuess;
var states = ['wa', 'or', 'ca'];

function eigthFunction() {
  for (var i = 0; i < 6; i++){
    stateGuess = prompt(question7).toLowerCase();
    console.log('Guess' + (i + 1) + ': ' + stateGuess);

    if (states.indexOf(stateGuess) >= 0){
      response7 = 'yes';
      alert(response7);
      total++;

      console.log('Response' + (i + 1) + ':' + response7);
      break;
    }else{
      response7 = 'WRONG!';
    }
    alert(response7);
    console.log('Response' + (i + 1) + ':' + response7);
  }
}
eigthFunction();

alert('You got ' + total + ' out of 7 question right!, ' + username + 'Better luck next time!');
console.log('total: ' + total);
