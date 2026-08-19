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

const pdfDialog = document.getElementById("project-pdf-dialog");
const pdfFrame = pdfDialog?.querySelector("iframe");
const pdfTitle = document.getElementById("project-pdf-title");

document.querySelectorAll("[data-pdf-open]").forEach(link => {
    link.addEventListener("click", event => {
        if (!pdfDialog?.showModal || !pdfFrame) {
            return;
        }

        event.preventDefault();
        pdfTitle.textContent = link.dataset.pdfTitle;
        pdfFrame.src = link.dataset.pdfSrc;
        pdfDialog.showModal();
    });
});

document.querySelector("[data-pdf-close]")?.addEventListener("click", () => {
    pdfDialog.close();
});

pdfDialog?.addEventListener("click", event => {
    if (event.target === pdfDialog) {
        pdfDialog.close();
    }
});
