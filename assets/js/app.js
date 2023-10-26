// preloader
const preloader = document.getElementById("preloader")
setTimeout(() => {
    document.getElementById("preloder").classList.add("d-none");
    document.body.classList.remove("overflow-hidden")
}, 2000)
// back to top
function backtotop() {
    window.scroll(0, 0)
}
window.addEventListener("scroll", function () {
    let backtotop = document.getElementById("backtotop")
    if (window.scrollY > 250) {
        backtotop.style.display = "block"
    } else {
        backtotop.style.display = "none"
    }
})
//  navbar
let a = document.getElementById("nav");
let overflow = document.querySelector(".flow");
let cross1 = document.querySelector(".cross-1");
let cross2 = document.querySelector(".cross-2");
let cross3 = document.querySelector(".cross-3");
let cross4 = document.querySelector(".cross-4");
let cross5 = document.querySelector(".cross-5");
let cross6 = document.querySelector(".cross-6");
let menuicon = document.querySelector("#menuIcon");

menuicon.addEventListener("click", function () {
    if (a.classList !== document.querySelector("right")) {
        a.classList.toggle("right");
        overflow.classList.toggle("flow-hidden");
        cross1.classList.toggle("cross-1");
        cross2.classList.toggle("cross-2");
        cross3.classList.toggle("cross-3")
    }
})

function navbar2() {
    a.classList.toggle("right");
    cross1.classList.toggle("cross-1");
    cross2.classList.toggle("cross-2");
    cross3.classList.toggle("d-none");
    document.querySelector("body").classList.remove("flow-hidden");
}