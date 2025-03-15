function hamburg() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(0px)";
}

function cancel() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(-500px)";
}

const texts = ["DEVELOPER", "STUDENT", "DESIGNER"];

let speed = 100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let index = 0;

function typeWriter() {
  if (index < texts[textIndex].length) {
    textElements.innerHTML += texts[textIndex].charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(eraseText, 1000);
  }
}

function eraseText() {
  if (textElements.innerHTML.length > 0) {
    textElements.innerHTML = textElements.innerHTML.slice(0, -1);
    setTimeout(eraseText, 50);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    index = 0;
    setTimeout(typeWriter, 500);
  }
}

function toggleTheme() {
  document.body.classList.toggle("light-theme");
}

function add(event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();
  const contentDiv = document.getElementById("content");

  if (!email || !subject || !message) {
    contentDiv.innerHTML +=
      '<p style="color: red; padding:5px;">All fields are required</p>';
    return;
  }

  const messageHTML = `
        <div class="message-card">
            <h3>${subject}</h3>
            <p class="message-email"><strong>From:</strong> ${email}</p>
            <p class="message-body">${message}</p>
            <p class="message-time">Sent on: ${new Date().toLocaleString()}</p>
        </div>
    `;

  contentDiv.innerHTML += messageHTML;

  document.getElementById("email").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("message").value = "";
}

window.onload = function () {
  if (document.querySelector(".typewriter-text")) {
    typeWriter();
  }

  const themeToggle = document.getElementById("theme-toogle");
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }

  const mobileThemeToggle = document.getElementById("mobile-theme-toggle");
  if (mobileThemeToggle) {
    mobileThemeToggle.addEventListener("click", toggleTheme);
  }

  const hamburger = document.querySelector(".hamburg");
  if (hamburger) {
    hamburger.addEventListener("click", hamburg);
  }

  const cancelBtn = document.querySelector(".cancel");
  if (cancelBtn) {
    cancelBtn.addEventListener("click", cancel);
  }

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", add);
  }
};
