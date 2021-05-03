// varriable declaratrion 
var mynamee = 'Mohammadali';
console.log(mynamee);
var mynamee = 'Mohammadali fallahzade';
console.log(mynamee);
let myname1 = 'George'
    myname2 = 'Joe';
console.log(myname1);
console.log(myname2);
const myage = 25;
console.log(myage);


// strings
let name2 = 'Mohammadali' ;
console.log(name2);
console.log(typeof name2)
//digit
let age = 25;
    age = -65;
    age = '47';
    age= 25.25;
console.log(age);
console.log(typeof age);
//undefined
let host = undefined;
console.log(typeof undefined);
//symbol
let symbol = Symbol ('this is a symbol');
console.log(typeof symbol);
//null
let jk = null;
console.log(typeof jk);
//array
let myarray = ['HTML', 'JS', 'PHP'];
console.log(myarray);
console.log(typeof myarray);
//object
let myinfo = {
    name3: 'Mohammadali',
    age3: 25,
    country: 'Iran',
}
console.log(myinfo);
console.log(typeof myinfo);
//date
let date = new Date();
console.log(date);
console.log(typeof date);
//bool
let ok = true;
console.log(ok);
console.log(typeof ok);

/*
    Strings
*/
let myname = 'Mohammadali'
console.log(myname)
let singleqouteindouble = "Hey I'm going to send you a picture it\'s awesome";
console.log(singleqouteindouble);
let course = 'javaScript';
    duration = ' in six month';
let concat = course + duration;
console.log(concat);
console.log(course + duration);
let a = 'math ';
    a += 'is hard';
console.log(a);

const learning = 'learning Javascript is Great';
    let email = 'Mohammadali.fallahzade@gmail.com';
let output;
//lenght
output = learning.length;
//concat
output = learning.concat(" ", "and fun");
//uppercase
output = learning.toUpperCase();
//lowercase
output = learning.toLowerCase();
//indexof
output = learning.indexOf('Javascript');
output = email.indexOf('@');
if (output > 0) {
    console.log('valid Email')
}else{
    console.log('invalid Email')
};

console.log(output);
//substring
output = learning.substring(0,9);
console.log(output)
output = learning.substring(learning.length -6);
console.log(output);
//slice
output = learning.slice(0,9);
console.log(output);
output = learning.slice(-6);
console.log(output);
//split
output = learning.split(' ');
console.log(output);
//replace
output = learning.replace('Javascript', 'Modern Javascript');
console.log(output);
//includes
output = learning.includes('Javascript');
console.log(output);
//repeat
output = learning.repeat(5);
console.log(output);
