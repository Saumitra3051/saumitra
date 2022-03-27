function Compute(){
    // simple interest 
    let a=document.getElementById("amount").value;
    let b=document.getElementById("rate").value;
    let c=document.getElementById("time").value;

    let si=a*b*c/100
    let s=document.getElementById("a").innerHTML="the amount is"+a 
    let d=document.getElementById("b").innerHTML="the rate is"+b
    let r=document.getElementById("c").innerHTML="the time is"+c
    let final=document.getElementById("si").innerHTML="the simple interest"+si
//    alert funtion
    if(a==""){
        alert("please enter Amount");
        
    }
    
    if(b==""){
        alert("please enter Rate");

    }
   
    if(c==""){
        alert("please enter Time");
    } 

   
    
}