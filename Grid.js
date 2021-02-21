


function Grid() {
 var h=($(window).height()-$("nav").height()-$("footer").height())*0.5;
 var h2= h*2;
 $(".grid-item").height(h);
 $(".grid-container").height(h2);
}

window.addEventListener("load", Grid);
window.addEventListener("resize", Grid);
window.addEventListener("click", Grid);