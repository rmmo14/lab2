'use strict';

// The program will have 3 yes/ questions: as a cf student do I live in WA? do I know another language aside from English? Do I enjoy the cold?
function iLive() {
  var myState = prompt('As a CodeFellows student, do I live in Washington?');
  var myStateCase = myState.toLowerCase();

  if (myStateCase === 'no' || myStateCase === 'n') {
    alert('You got it! I\'m coming at you from CA!');
  } else {
    alert('Nope, I am attending remotely from CA');
  }
  console.log('I am from CA, you said: ' + myState);
}
iLive();

function myLang() {
  var whatSpeak = prompt('Does the developer speak a language other than English?');
  var whatSpeakRecase = whatSpeak.toLowerCase();
  if (whatSpeakRecase === 'yes' || whatSpeakRecase === 'y') {
    alert('Correct, I can speak two others. Read my page!');
  } else if (whatSpeakRecase === 'no' || whatSpeakRecase === 'n') {
    alert('Not exactly. Check my "About Me" , I can speak two other languages.');
  } else {
    whatSpeak = prompt('Please type yes or no');
  }
  console.log('I speak Spanish and Japanese, you said: ' + whatSpeak);
}
myLang();

function mySeason() {
  var myTemp = prompt('Based on the first question, do I enjoy the cold?');

  var myTempCase = myTemp.toLowerCase();

  if (myTempCase === 'yes' || myTempCase === 'y') {
    alert('You are dead wrong!');
  } else if (myTempCase === 'no' || myTempCase === 'n') {
    alert('Correct! I get cold quickly and hate it!');
  } else {
    myTemp = prompt('Please type yes or no');
  }
  console.log('I hate the cold, you said: ' + myTemp);
}
mySeason();

// the other questions will be multiple choice: I majored in a STEM subject, quess which one. Based on the previous question, did I receive a bachelors, masters, both, or neither?
function myStudy() {
  var myMajor = prompt('I majored in a STEM subject, which do you think?');
  var myMajorCase = myMajor.toLowerCase();

  if (myMajorCase === 'mathematics' || myMajorCase === 'math' || myMajorCase === 'm') {
    alert('Yup! I loved it so much I continue to do math this day! See how in my "About Me"!');
  } else if (myMajorCase === 'technology' || myMajorCase === 'tech' || myMajorCase === 't') {
    alert('Not quite. Check my "About Me" to find out!');
  } else if (myMajorCase === 'science' || myMajorCase === 's') {
    alert('No, but my major is involved in a lot of sciences. Check my "About Me"');
  } else if (myMajorCase === 'engineering' || myMajorCase === 'e') {
    alert('I started as that but the physics killed me so I switched. Check my "About Me"!');
  } else {
    alert('See my "About Me" to find out!');
  }
  console.log('I studied math, you said: ' + myMajor);
}
myStudy();

function myDegree() {
  var myEducation = prompt('Did I receive a bachelors, masters, both, or neither?');
  var myEducationCase = myEducation.toLowerCase();

  if (myEducationCase === 'both') {
    alert('Trueeeee :)');
  } else if (myEducationCase === 'neither') {
    alert('Uhhhh, rude. See my "About Me"!');
  } else {
    alert('Just check my "About Me".');
  }
  console.log('I have a BA and MA, you said: ' + myEducation);
}
myDegree();

//now for the personalization. The code will ask the user their name and display a message to them

function yourName() {
  var userName = prompt('what is your name?');
  while (userName === '' || userName === null) {
    userName = prompt('Please input a character for your name or else!');
  }
  alert('Welcome ' + userName + ' , I hope you enjoy this page :)');
}
yourName();

//This code will add a 6th question where the user has to keep guessing a number to guess if it is wrong or not. It should give them only 4 tries, tells them if they are close to the number, once attempts are exhausted it should show the correct answer.

function myPrime() {
  var guessNumber = prompt('In mathematics a prime number is divisible by one and itself ONLY, which is the FOURTH prime number? You will have four tries to guess correctly.');
  var i = 0;

  while (i < 3) {
    var guessMe = parseInt(guessNumber);
    if (guessMe === 7) {
      i = 3;
      alert('Correct!');
    } else if (guessMe > 50) {
      guessNumber = prompt('Way too high, you have ' + (3 - i) + ' attempts left.');
      i++;
    } else if (guessMe > 20 && guessMe <= 50) {
      guessNumber = prompt('Too high, you have ' + (3 - i) + ' attempts left.');
      i++;
    } else if (guessMe > 10 && guessMe <= 20) {
      guessNumber = prompt('A little too high, you have ' + (3 - i) + ' attempts left.');
      i++;
    } else if (guessMe <= 10 && guessMe > 7) {
      guessNumber = prompt('Just a smidge too high, you have ' + (3 - i) + ' attempts left.');
      i++;
    }
    else if (guessMe < 5 && guessMe >= 0) {
      guessNumber = prompt('Too low, go a slight bit higher. You have ' + (3 - i) + ' attempts left.');
      i++;
    } else if (guessMe >= 5 && guessMe < 7) {
      guessNumber = prompt('Close, go a tad bit higher. You have ' + + (3 - i) + ' attempts left.');
      i++;
    } else {
      guessNumber = prompt('Please input a NUMBER you believe is the fourth prime number! You have ' + (3 - i) + ' attempts left.');
      i++;
    }
  }
  //at the moment this code does not alert correct if they get it on the last attempt
  alert('The first four prime numbers 2, 3, 5, and 7.');
}
myPrime();

//This code will ask another question that has multiple correct answers stored in an array. They get 6 attempts to guess correctly, the program ends once they guess correctly or they run out of attemtps. Show all the correct answers.

function myShows() {
  var yourResponse = prompt('I like 3 of the following 8 shows, input your guess by selecting it\'s appropriate number: 1) "Rick and Morty" 2) "Parks and Rec" 3) "Botched" 4) "RuPaul\'s Drag Race" 5) "Home Improvement" 6) "KUWTK" 7) "24" 8) "Survivor"');
  var j = 0;
  var correctAnswers = ['1', '2', '4'];

  while (j < 6) {
    console.log('Your guess at my favorite shows: ' + yourResponse);
    switch (yourResponse) {
      case correctAnswers[0]:
      case correctAnswers[1]:
      case correctAnswers[2]:
        alert('Correct! That is one of them.');
        j = 6;
        break;
      default:
        yourResponse = prompt('Not exactly, try again. Be sure to pick a number 1-8 for 1) "Rick and Morty" 2) "Parks and Rec" 3) "Botched" 4) "RuPaul\'s Drag Race" 5) "Home Improvement" 6) "KUWTK" 7) "24" 8) "Survivor". You have ' + (6 - j) + ' attempts left.');
        j++;
        break;
    }
  }
  //at the moment this code does not alert correct if they get it on the last attempt
  alert('The three shows are 1) "Rick and Morty 2) "Parks and Rec" and 4) RuPaul\'s Drag Race');
}
myShows();

//This code will count the number of correct responses from the user and give them a score.

// function rightAnswers() {
//   var userResponses = [myStateCase, whatSpeakRecase, myTempCase, myMajorCase, myEducationCase, guessNumber, yourResponse];
//   var trueAnswers = ['no', 'yes', 'no', 'math', 'both', '7', '4'];
//   var countMe = 0;

//   //at the moment, this code does not check for different variations of yes no or math
//   for (var i = 0; i < 7; i++) {
//     if (userResponses[i] === trueAnswers[i]) {
//       countMe++;
//     } else {
//       countMe = 0 + countMe;
//     }
//   }
//   var totalScore = parseInt(countMe);
//   console.log('Your total was: ' + totalScore + ' out of 7 points.');

//   alert(userName + '\'s responses were ' + userResponses + '. You scored ' + totalScore + ' out of 7 points.');
//   console.log(userName + ' responses were: ' + userResponses + '.');
//   alert('Correct answers are ' + trueAnswers + '!');
//   console.log('Correct answers are: ' + trueAnswers + '!');
// }
// rightAnswers();
