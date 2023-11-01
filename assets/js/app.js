// preloader
const preloader = document.getElementById("preloader")
setTimeout(() => {
    document.getElementById("preloder").classList.add("d-none");
    document.body.classList.remove("overflow_hidden")
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
});
//  navbar
let a = document.getElementById("nav");
let overflow = document.querySelector(".overflow_hidden");
let heroIcon = document.querySelector(".cross-bg")
let cross4 = document.querySelector(".cross-4");
let cross5 = document.querySelector(".cross-5");
let cross6 = document.querySelector(".cross-6");
let menuicon = document.querySelector("#menuIcon");
let home = document.querySelector(".home");

menuicon.addEventListener("click", function () {
    if (a.classList !== document.querySelector("right")) {
        a.classList.toggle("right");
        overflow.classList.toggle("overflow_hidden");
        cross4.classList.toggle("cross-1");
        cross5.classList.toggle("cross-2");
        cross6.classList.toggle("cross-3")
    }
})

function navbar2() {
    a.classList.toggle("right");
    overflow.classList.remove("overflow_hidden");
    cross4.classList.toggle("cross-4");
    cross5.classList.toggle("cross-5");
    cross6.classList.toggle("cross-6");
}