var modal=document.getElementById('login-form');
var close=document.getElementsByClassName("close")[0];
var login=document.getElementById("login");

login.onclick=()=>{
   modal.style.display = "block";
}
close.onclick=()=>{
   modal.style.display="none";
}
window.onclick=(e)=>{
    if(e.target==modal){
        modal.style.display="none";
    }
}