document.getElementById("zero").onclick = function(){
    document.getElementById("entrer").value += 0;
}
document.getElementById("one").onclick = function(){
    document.getElementById("entrer").value += 1;
}
document.getElementById("two").onclick = function(){
    document.getElementById("entrer").value += 2;
}
document.getElementById("three").onclick = function(){
    document.getElementById("entrer").value += 3;
}
document.getElementById("four").onclick = function(){
    document.getElementById("entrer").value += 4;
}
document.getElementById("five").onclick = function(){
    document.getElementById("entrer").value += 5;
}
document.getElementById("six").onclick = function(){
    document.getElementById("entrer").value += 6;
}
document.getElementById("seven").onclick = function(){
    document.getElementById("entrer").value += 7;
}
document.getElementById("eight").onclick = function(){
    document.getElementById("entrer").value += 8;
}
document.getElementById("nine").onclick = function(){
    document.getElementById("entrer").value += 9;
}
document.getElementById("plus").onclick = function(){
    document.getElementById("entrer").value += "+" ;
}
document.getElementById("moins").onclick = function(){
    document.getElementById("entrer").value += "-";
}
document.getElementById("equal").onclick = function(){
    document.getElementById("entrer").value = eval(document.getElementById("entrer").value);
}
document.getElementById("multiply").onclick = function(){
    document.getElementById("entrer").value += "*";
}
document.getElementById("division").onclick = function(){
    document.getElementById("entrer").value += "/";
}
document.getElementById("point").onclick = function(){
    document.getElementById("entrer").value += ".";
}
document.getElementById("deletall").onclick = function(){
    document.getElementById("entrer").value = "";
}
document.getElementById("delet").onclick = function(){
    document.getElementById("entrer").value =document.getElementById("entrer").value.toString().slice(0, -1);
}