/* ===== toggle icon navbar ===== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* ===== Scroll Sections Active Link ===== */
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
     /* ===== Sticky Navbar ===== */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* ===== Remove menu on scroll (mobile) ===== */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

let themeToggle = document.querySelector('#theme-toggle');
let icon = themeToggle.querySelector('i');

// Load saved mode
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    icon.classList.replace('bx-moon', 'bx-sun');
}

themeToggle.onclick = () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        icon.classList.replace('bx-moon', 'bx-sun');
        localStorage.setItem("theme", "light");
    } else {
        icon.classList.replace('bx-sun', 'bx-moon');
        localStorage.setItem("theme", "dark");
    }
};