const form = document.getElementById("contactForm");
const message = document.getElementById("message");


const result = document.getElementById("message");
emailjs.init({publicKey: "Y7GTcYkjbYuLvdo6l"});

form.addEventListener("submit", function(e){

    e.preventDefault();

    emailjs.sendForm(
        "service_fx0gaud",
        "template_utwig79",
        this
    )
    .then(() => {

        result.textContent =
        "Message sent successfully!";

        result.style.color = "#38bdf8";

        form.reset();

    })
    .catch((error) => {
        console.error(error);

        result.textContent =
        "Failed to send message.";

        result.style.color = "red";
    });

});
const themeToggle = document.getElementById("theme-toggle");

if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("light-mode");
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        localStorage.setItem("theme","light");
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';

    }else{

        localStorage.setItem("theme","dark");
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }

});
const sections = document.querySelectorAll("section");
const hiddenElements = document.querySelectorAll(
".hidden-left, .hidden-right, .hidden-up"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(
    "section, .card, .experience-card"
).forEach((el) => {
    observer.observe(el);
});