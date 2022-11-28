var paris = document.getElementById('paris')
var div1 = document.getElementById("div1")
var london = document.getElementById('london')
var div2 = document.getElementById("div2")
var tokyo = document.getElementById('tokyo')
var div3 = document.getElementById("div3")
var btn_remove = document.getElementById = ("x")

function show() {
    div1.style.display = "block"
    div2.style.display = "none"
    div3.style.display = "none"


}

function show2() {
    div1.style.display = "none";
    div3.style.display = "none";
    div2.style.display = "block";

}

function show3() {
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "block";

}

function hide() {
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "none";
}