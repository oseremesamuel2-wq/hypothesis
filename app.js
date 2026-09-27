const header = document.getElementById("siteHeader");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const navLinks = document.querySelectorAll(".nav-link");

function updateHeader(){
    header.classList.toggle("scrolled", window.scrollY > 20);
}

function closeMenu(){
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-label", "Open navigation");
}

function toggleMenu(){
    const isOpen = mainNav.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );
}

window.addEventListener("scroll", updateHeader);

menuToggle.addEventListener("click", toggleMenu);

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(item => item.classList.remove("active"));
        link.classList.add("active");
        closeMenu();
    });
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
        const target = document.querySelector(link.getAttribute("href"));

        if(target){
            event.preventDefault();
            target.scrollIntoView({
                behavior:"smooth",
                block:"start"
            });
        }
    });
});

const sections = document.querySelectorAll("section[id]");

const sectionObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                const currentId = entry.target.id;

                navLinks.forEach(link => {
                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") === `#${currentId}`
                    );
                });
            }
        });
    },
    {
        threshold:0.35
    }
);

sections.forEach(section => sectionObserver.observe(section));

window.addEventListener("resize", () => {
    if(window.innerWidth > 1000){
        closeMenu();
    }
});

updateHeader();

