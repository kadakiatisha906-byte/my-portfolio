const menuButton = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-menu");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("mobile-menu");
    });
});

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    {
        threshold: 0.15
    }
);

sections.forEach(section => {
    observer.observe(section);
});

const pdfDialog = document.getElementById("elan-pdf-dialog");
const pdfFrame = pdfDialog?.querySelector("iframe");

document.querySelector("[data-pdf-open]")?.addEventListener("click", () => {
    if (!pdfFrame.src) {
        pdfFrame.src = pdfFrame.dataset.src;
    }
    pdfDialog.showModal();
});

document.querySelector("[data-pdf-close]")?.addEventListener("click", () => {
    pdfDialog.close();
});

pdfDialog?.addEventListener("click", event => {
    if (event.target === pdfDialog) {
        pdfDialog.close();
    }
});
