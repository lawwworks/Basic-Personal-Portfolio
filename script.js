// document
//   .getElementById("contactForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();
//     alert("Thank you for reaching out! Your message has been sent.");
//   });

// Smooth scroll to sections
document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
    document
      .querySelectorAll("nav ul li a")
      .forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
  });
});

// Form submission
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for reaching out! I will get back to you soon.");
  });
