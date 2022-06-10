console.log("JS is running");

let x1=document.getElementById("A1") ;
let x2=document.getElementById("A2") ;
let x3=document.getElementById("A3") ;
let x4=document.getElementById("A4") ;
let x5=document.getElementById("A5") ;
let x6=document.getElementById("A6") ;
let x7=document.getElementById("A7") ;
let x8=document.getElementById("A8") ;
let x9=document.getElementById("A9") ;
let x10=document.getElementById("A10") ;

let q1=document.getElementById("ques1") ;
let q2=document.getElementById("ques2") ;
let q3=document.getElementById("ques3") ;
let q4=document.getElementById("ques4") ;
let q5=document.getElementById("ques5") ;
let q6=document.getElementById("ques6") ;
let q7=document.getElementById("ques7") ;
let q8=document.getElementById("ques8") ;
let q9=document.getElementById("ques9") ;
let q10=document.getElementById("ques10") ;

let wrong=document.getElementsByClassName("W");

ans=[q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];
let flag=0;
let i=1;


x1.onclick=function() {check()};
x2.onclick=function() {check()};
x3.onclick=function() {check()};
x4.onclick=function() {check()};
x5.onclick=function() {check()};
x6.onclick=function() {check()};
x7.onclick=function() {check()};
x8.onclick=function() {check()};
x9.onclick=function() {check()};
x10.onclick=function() {check()};

wrong.onclick=function() {WrAlert()};
wrong.foreach(WrAlert);

function check(){
    console.log("correct answer");
    flag=1;
    console.log("flag is correct");
    ans[i].scrollIntoView();
    i++;
    
}


// for(let i=0;i<wrong.length;i++){
//     function WrAlert(){
//         alert("!!Wrong Answer!!");
//         flag=0;
//     }
// }
