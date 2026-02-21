// Login
function loginUser(event){
event.preventDefault();
const username=document.getElementById("username").value;
const password=document.getElementById("password").value;

if(username==="admin" && password==="1234"){
window.location.href="dashboard.html";
}else{
alert("Invalid Credentials (Use admin / 1234)");
}
}

function logout(){
window.location.href="login.html";
}

function toggleFAQ(element){
let content=element.nextElementSibling;
content.style.display=content.style.display==="block"?"none":"block";
}