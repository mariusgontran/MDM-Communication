const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle("show",entry.isIntersecting)
        console.log(entry)
    })
},
{
    threshold:0.5,
}
)

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el))


const slideObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle("slide",entry.isIntersecting)
        console.log(entry)
    })
},
{
    threshold:0.7,
}
)

const hiddenSlideElements = document.querySelectorAll('.hidden-slide');
hiddenSlideElements.forEach((el) => slideObserver.observe(el))
