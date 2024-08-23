let a=Math.floor(Math.random()*100);
let count=1;
function check(){
   let b=document.getElementById("no"); 


if(b.value==a&&count<=10){
    document.getElementById("sentence").innerHTML="Found correctly!!!";
   window.location.href="./win.html";   
}
else  if(b.value>a&&count<=10){

       document.getElementById("sentence").innerHTML="Guess min value";
       document.getElementById("number").innerHTML=count;
       count++;
    }
else  if(b.value<a&&count<=10){

        document.getElementById("sentence").innerHTML="Guess max value";
        document.getElementById("number").innerHTML=count;
        count++;
     }
else if(b.value!=a&&count>10){
    document.getElementById("sentence").innerHTML="Attempts finished";
    window.location.href="./loss.html";
}
    
   }
function reset(){
   location.reload();
}
