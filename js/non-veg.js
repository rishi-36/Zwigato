let a=document.getElementById("nav-bar");
let b1=document.getElementById("first-icon");
let b2=document.getElementById("second-icon");
function navbar1()
{
    a.style.display="block";
    b1.style.display="none";
    b2.style.display="inline";
}

function navbar2()
{
    a.style.display="none";
    b1.style.display="inline";
    b2.style.display="none";
}