// function isAdult( age ) {
//  if (age && age >= 18) {
//   return true;
//  } else {
//   return false;
//  }
// }

// Can also be

function isAdult( age ) {
 return age && age >=18
}

console.log(isAdult(15));

function countToFive(start = 1) {
 for(var i = start; i <= 5; i +=1) {
  console.log(i);
 }
}

countToFive(2);

function greet(name) {
 name && console.log('Hi, ' + name + '!');
}

greet("Nicolai");