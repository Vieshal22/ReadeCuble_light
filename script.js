function predictCollege() {
    let score = document.getElementById("score").value;
    let result = document.getElementById("result");

    if (score >= 90) {
        result.innerText = "You can get into Top Tier Colleges!";
    } else if (score >= 75) {
        result.innerText = "You have a good chance at Mid Tier Colleges.";
    } else {
        result.innerText = "Consider applying to local and emerging colleges.";
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Thank you, " + name + "! Your message has been sent.");
        document.getElementById("contact-form").reset();
    } else {
        alert("Please fill in all fields.");
    }
});

