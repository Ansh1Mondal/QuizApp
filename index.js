console.log("JS is running");
// window.onscroll = function () { window.scrollTo(0, 0); };

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
let marks=0;


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


let Sc=document.getElementById("score");
let Mr=document.getElementById("marks");
let Tx=document.getElementById("Stext");

let T=document.getElementById("top");
let Rf=document.getElementById("refresh");
Rf.onclick= function() {MoveToTop()};

for(let i=0;i<=30;i++){
    wrong[i].onclick= function() {WrAlert()};
}



function WrAlert(){
    alert("!!Wrong Answer!!");
    console.log("wrong answer");
    flag=0;
    
    
    // if(marks>=0)
    //     marks--;
    
    if(i<10){
        ans[i].scrollIntoView();
        i++;
    }
    else if (i==10)
    {
        // marks++;
        Sc.scrollIntoView();
        Mr.innerHTML=marks;
        if(marks==10)
            Tx.innerHTML="!!!Excellent work!!!";
        else if (marks<10 && marks>=8)
            Tx.innerHTML="!!Well Done!!";
        else if(marks<8 && marks>=5)
            Tx.innerHTML="Nice job!";
        else 
            Tx.innerHTML="Better luck next time!";
        console.log(marks);
    }
}

function check(){
    console.log("correct answer");
    flag=1;
    console.log("flag is correct");
    if(i<10){
        ans[i].scrollIntoView();
        marks++;
        i++;
    }
    else if (i==10){
        marks++;
        Sc.scrollIntoView();
        Mr.innerHTML=marks;
        if(marks==10)
            Tx.innerHTML="!!!Excellent work!!!";
        else if (marks<10 && marks>=8)
            Tx.innerHTML="!!Well Done!!";
        else if(marks<8 && marks>=5)
            Tx.innerHTML="Nice job!";
        else if(marks<5)
            Tx.innerHTML="Better luck next time!";
        console.log(marks);
    }
}

function MoveToTop(){
    // marks=0;
    // Tx.innerHTML="";
    console.log("clicked");
    window.location.reload();
    T.scrollIntoView();
    // document.body.scrollTop = -1;
    // document.documentElement.scrollTop = -1;

}