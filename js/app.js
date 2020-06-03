'use strict';

// The program will have 3 yes/ questions: as a cf student do I live in WA? do I know another language aside from English? Do I enjoy the cold?
var myState = prompt('As a CodeFellows student, do I live in Washington?' );
if (myState === 'no'||myState === 'No' || myState === 'N' || myState === 'n'){
  alert('You got it! I\'m coming at you from CA!');
} else {
  alert('Nope, I am attending remotely from CA');
}
console.log('I am from CA, you said ' + myState);

var whatSpeak = prompt('Does the developer speak a language other than English?');
var whatSpeakRecase = whatSpeak.toLowerCase();
if (whatSpeakRecase === 'yes' || whatSpeakRecase === 'y'){
  alert('Correct, I can speak two others. Read my page!');
} else if (whatSpeakRecase === 'no' || whatSpeakRecase === 'n') {
  alert('Not exactly. Check my "About Me" , I can speak two other languages.');
} else {
  whatSpeak = prompt('Please type yes or no');
}
console.log('I speak Spanish and Japanese, you said: ' + whatSpeak);

var myTemp = prompt('Based on the first question, do I enjoy the cold?');
var myTempCase = myTemp.toLowerCase();

if (myTempCase === 'yes' || myTempCase === 'y') {
  alert('You are dead wrong!');
} else if (myTempCase === 'no' || myTempCase === 'n') {
  alert('Correct! I get cold quickly and hate it!');
} else {
  whatSpeak = prompt('Please type yes or no');
}
console.log('I hate the cold, you said ' + myTemp);
// the other questions will be multiple choice: I majored in a STEM subject, quess which one. Based on the previous question, did I receive a bachelors, masters, both, or neither?
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


//now for the personalization. The code will ask the user their name and display a message to them

var userName = prompt('what is your name?');
while (userName ===''|| userName === null){
  userName = prompt('Please input a character for your name or else!');
}
alert('Welcome to my page ' + userName + ' , I hope you enjoy this page :)');
