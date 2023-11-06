var tog = document.getElementById("togle")

var ji = document.getElementById("navbhji")


var body = document.querySelector("body")

var hjjk = document.getElementById("kooui")


var navlink1 = document.getElementById("navlink1")
var navlink2 = document.getElementById("navlink2")
var navlink3 = document.getElementById("navlink3")

var logo = document.getElementById("logoo")

var h1 = document.getElementById("ex1")
var h2 = document.getElementById("ex2")
var h3 = document.getElementById("ex3")
var h4 = document.getElementById("ex4")
var exbtn = document.getElementById("btnContact")

var flag=0
tog.addEventListener("click",()=>{
    if(flag==0){
        body.style.backgroundColor="white";
        tog.style.borderColor="black";
        tog.style.color="black";
        ji.style.borderColor="black"
        ji.style.color="black"
        navlink1.style.color="black"
        navlink2.style.color="black"
        navlink3.style.color="black"
        logo.style.color="black"

        h1.style.color="black"
        h2.style.color="black"
        h3.style.color="black"
        h4.style.color="black"
exbtn.style.borderColor="black"
exbtn.style.color="black"
tog.innerHTML=`<i class="fa-solid fa-moon"></i>`
hjjk.style.color="black"

flag=1
    }
    else{
        body.style.backgroundColor="black"
        tog.style.borderColor="white"
        tog.style.color="white"
        ji.style.borderColor="white"
        ji.style.color="white"
        navlink1.style.color="white"
        navlink2.style.color="white"
        navlink3.style.color="white"
        logo.style.color="white"

        h1.style.color="white"
        h2.style.color="white"
        h3.style.color="white"
        h4.style.color="white"

        exbtn.style.borderColor="white"
        exbtn.style.color="white"
        tog.innerHTML=`<i class="fa-solid fa-sun"></i>`

        hjjk.style.color="white"



        flag=0
    }
})