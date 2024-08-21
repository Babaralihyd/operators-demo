"use strict";
// increament  +1 and decreament -1
//increament 
//  let x = 10 ;
//  x = x+1 
//  console.log (x)
// pre - increament
// let x= 299 ;
// console.log (++x) // 300
// console.log (++x)  //301 
// console.log (x) // 301
// post  - increament 
// let x = 20
// console.log (x++)  //20
// console.log (x++)  // 21
// console.log (x)    //22
// let x = 50 ; 
// let num1 = ++x
// console.log (num1)
// decreament
// let y = 30 ; 
// // y = y-1
// --y
// console.log (y)
//  let y = 15 ;
//  y = y-1 
//  console.log (y)
// pre -  decreament
// let y=30 ;
// console.log (--y) // 29
// post  -  decreament 
// let y=50 ;
// console.log (y--) // 50
// console.log (y--) // 49
//practice
let number1 = 20;
// console.log((++number1) + (++number1) )
// +21   +     22    == 43
// console.log  ((number1++)  +   (number1++))       // 41 result     
// console.log (--number1)      // 19 result
// console.log ((++number1) + (number1++) )  
let num1 = number1++;
let num2 = --number1;
let num3 = ++number1;
console.log(num1 + num2 - num3);
