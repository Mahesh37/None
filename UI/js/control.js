//  
//Signal Controlling
var green1
document.getElementById("green1").onclick = function () {
    document.getElementById("red1").style.color = "black";
    document.getElementById("green1").style.color = "aquamarine";
    document.getElementById("green2").style.color = "black";
    document.getElementById("green3").style.color = "black";
    document.getElementById("green4").style.color = "black";
    document.getElementById("red2").style.color = "red";
    document.getElementById("red3").style.color = "red";
    document.getElementById("red4").style.color = "red";
    console.log("Green1");
}
document.getElementById("green2").onclick = function () {
    document.getElementById("red2").style.color = "black";
    document.getElementById("green1").style.color = "black";
    document.getElementById("green2").style.color = "aquamarine";
    document.getElementById("green3").style.color = "black";
    document.getElementById("green4").style.color = "black";
    document.getElementById("red1").style.color = "red";
    document.getElementById("red3").style.color = "red";
    document.getElementById("red4").style.color = "red";
    console.log("Green2");
}
document.getElementById("green3").onclick = function () {
    document.getElementById("red3").style.color = "black";
    document.getElementById("green1").style.color = "black";
    document.getElementById("green2").style.color = "black";
    document.getElementById("green3").style.color = "aquamarine";
    document.getElementById("green4").style.color = "black";
    document.getElementById("red2").style.color = "red";
    document.getElementById("red1").style.color = "red";
    document.getElementById("red4").style.color = "red";
    console.log("Green3");
}
document.getElementById("green4").onclick = function () {
    document.getElementById("red4").style.color = "black";
    document.getElementById("green1").style.color = "black";
    document.getElementById("green2").style.color = "black";
    document.getElementById("green3").style.color = "black";
    document.getElementById("green4").style.color = "aquamarine";
    document.getElementById("red2").style.color = "red";
    document.getElementById("red3").style.color = "red";
    document.getElementById("red1").style.color = "red";
    console.log("Green4");
}
