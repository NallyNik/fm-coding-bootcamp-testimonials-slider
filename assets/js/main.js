const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");
const testimonials = document.querySelectorAll(".testimonial");

btnLeft.addEventListener("click", () => {
    testimonials[0].classList.add("active");
    testimonials[1].classList.remove("active");
})

btnRight.addEventListener("click", () => {
    testimonials[1].classList.add("active");
    testimonials[0].classList.remove("active");
})