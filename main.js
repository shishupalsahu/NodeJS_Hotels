// const person = {
//     name: "shishupal",
//     istsudent:false,
//     hobbies:['listing', 'waling']
// };
// console.log(person.hobbies);
// console.log(person.name);

// const age=[23,43,53,17,56];
// const result=age.filter(chekage);

// function chekage (age){
//     return age>20;
// }
// console.log(result);


// var prompt = require('prompt-sync')();
// var age = prompt("Enter Your Age : ");
// if(age>18){
//     console.log("Yes you are Eleible for voting");
// }else{
//     console.log("khane pe dhyan do Babu");
// }


// function add(a,b){
//     return a+b;
// }
// var result=add(2,4);
// console.log(result);

 

// var add=(a,b) =>a+b;
// var result=add(3,6);
// console.log(result);

//Video-3

//1) convert object to  json file. 
// const objecttoconvert ={
//     name:"Ajay",
//    Age: 10,
//    Subject:"Math"
// };
// const json=JSON.stringify(objecttoconvert);
// console.log(json);


// 2) make server using Express.JS 
 // add npm i express on terminal

 // There are many some method to live the server in which one is get methode-- 
 // ye get ka code npm express wesite se liye hai ....
const express = require('express')
const app = express()
const db=require('./db')

app.get('/', function (req, res) {
  res.send('Hi, My Name is Ayash')
})

app.get('/person',function(req,res){
   res.send('Yes i am Ready!!')
})

app.listen(3000,()=>{ console.log('Our Server is live..!');})

// Video-7
// open db.js file for video 7