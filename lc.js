const loder = document.querySelector(".loder");
const p = document.querySelector("p");
const b = document.querySelector("body");

document.addEventListener("DOMContentLoaded", function () {

     setTimeout(() => {
        loder.style.left = "0";
    }, 1000);
    

    setTimeout(() => {
        loder.style.left = "100%";
        p.textContent = "آرررررررره";
        b.style.backgroundColor = "green" ; 
    }, 2000);

});
