let sideInfo = document.getElementById("side-info");
let mainContent = document.querySelector(".main-content");
let body = document.body;

function show() {
    body.style.backgroundColor = "rgba(0,0,0,0.3)";
    mainContent.style.marginLeft = "250px";
    sideInfo.style.width = "250px";
}
let btnShow = document.getElementsByClassName("show");
for (let i = 0; i < btnShow.length; i++) {
    btnShow[i].addEventListener("click", show);
}


function close() {
    mainContent.style.marginLeft = "0";
    sideInfo.style.width = "0";
    body.style.backgroundColor = "#BD3612";  
}
let btnClose = document.getElementsByClassName("close-button");
for (let i = 0; i < btnClose.length; i++) {
    btnClose[i].addEventListener("click", close);
}