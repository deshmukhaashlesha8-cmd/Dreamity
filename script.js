/* =========================
   DESCRIPTIVE REALITY
   MAIN JAVASCRIPT
========================= */

/* -------------------------
   PARTICLES
------------------------- */
const particleContainer = document.getElementById("particles");
for (let i = 0; i < 70; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 8 + "s";
    particle.style.animationDuration = 5 + Math.random() * 8 + "s";
    particleContainer.appendChild(particle);
}

/* -------------------------
   SMOOTH SCROLL
------------------------- */
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

/* -------------------------
   START JOURNEY
------------------------- */
function startJourney() {
    scrollToSection("books");
    setTimeout(() => {
        alert("Welcome to Descriptive Reality.\n\nChoose a story and enter its visual world.");
    }, 800);
}

/* -------------------------
   STORY MODAL
------------------------- */
function openStory(bookName) {
    const modal = document.getElementById("storyModal");
    const title = document.getElementById("modalTitle");
    title.textContent = bookName;
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    const modal = document.getElementById("storyModal");
    modal.classList.remove("show");
    document.body.style.overflow = "auto";
}

/* Close modal when clicking outside */
const storyModalEl = document.getElementById("storyModal");
if (storyModalEl) {
    storyModalEl.addEventListener("click", function (event) {
        if (event.target === this) {
            closeModal();
        }
    });
}

/* -------------------------
   BOOK FILTER
------------------------- */
function filterBooks(category, button) {
    const cards = document.querySelectorAll(".book-card");
    const filters = document.querySelectorAll(".filter");
    filters.forEach(filter => filter.classList.remove("active"));
    button.classList.add("active");
    cards.forEach(card => {
        const genre = card.dataset.genre;
        card.style.display = (category === "all" || genre === category) ? "block" : "none";
    });
}

/* -------------------------
   SEARCH
------------------------- */
function searchBooks() {
    const search = document.getElementById("searchInput").value.toLowerCase();
    const cards = document.querySelectorAll(".book-card");
    cards.forEach(card => {
        const title = card.dataset.title.toLowerCase();
        card.style.display = title.includes(search) ? "block" : "none";
    });
}

/* -------------------------
   VISUAL EXPERIENCE
------------------------- */
function showDemo() {
    const modal = document.getElementById("storyModal");
    const title = document.getElementById("modalTitle");
    title.textContent = "The Visual Experience";
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
}

/* -------------------------
   KEYBOARD SUPPORT
------------------------- */
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeModal();
    }
});

/* -------------------------
   NAVBAR EFFECT
------------------------- */
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(8,7,10,0.96)";
    } else {
        navbar.style.background = "rgba(11,10,13,0.85)";
    }
});
