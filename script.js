/* --------------------------------- */
/* ----- Scripts -----*/
/* --------------------------------- */

const nav = document.querySelector(".nav");
const navMenu = document.querySelector(".nav-items");
const btnToggleNav = document.querySelector(".menu-btn");
const workEls = document.querySelectorAll(".work-box");
const workImgs = document.querySelectorAll(".work-img");
const mainEl = document.querySelector("main");
const yearEl = document.querySelector(".footer-text span");

const toggleNav = () => {
    nav.classList.toggle("hidden");

    // Prevent screen from scrolling when menu is opened
    document.body.classList.toggle("lock-screen");

    if (nav.classList.contains("hidden")) {
        btnToggleNav.textContent = "menu";
    } else {
        // When menu is opened after transition change text respectively
        setTimeout(() => {
            btnToggleNav.textContent = "close";
        }, 475);
    }
};

btnToggleNav.addEventListener("click", toggleNav);

navMenu.addEventListener("click", (e) => {
    // Check if clicking a link or a checkbox (theme toggle)
    if (e.target.localName === "a") {
        if (window.innerWidth < 768) {
            toggleNav();
        }
    }
});

document.body.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !nav.classList.contains("hidden")) {
        toggleNav();
    }
});

/* --------------------------------- */
/* ----- Work Item Animations -----*/
/* --------------------------------- */
workImgs.forEach((workImg) => workImg.classList.add("transform"));

let observer = new IntersectionObserver(
    (entries) => {
        const [entry] = entries;
        const [textbox, picture] = Array.from(entry.target.children);
        if (entry.isIntersecting) {
            picture.classList.remove("transform");
            Array.from(textbox.children).forEach(
                (el) => (el.style.animationPlayState = "running")
            );
        }
    }, {
        threshold: 0.3
    }
);

workEls.forEach((workEl) => {
    observer.observe(workEl);
});

/* --------------------------------- */
/* ----- Theme Toggle -----*/
/* --------------------------------- */
const switchThemeEl = document.querySelector('input[type="checkbox"]');
const storedTheme = localStorage.getItem("theme");

// Ensure correct initial state
if (storedTheme === "light") {
    switchThemeEl.checked = false; // Unchecked for light (based on previous logic)
    document.body.classList.add("light");
    document.body.classList.remove("dark");
} else {
    // Default to dark or user set dark
    switchThemeEl.checked = true; // Checked for dark (based on previous logic)
    document.body.classList.add("dark");
    document.body.classList.remove("light");
}

switchThemeEl.addEventListener("change", () => {
    const isChecked = switchThemeEl.checked;
    
    // Logic: Checked = Dark, Unchecked = Light (or vice versa? Let's stick to consistent)
    // Previous logic: checked = (storedTheme === "dark" || storedTheme === null)
    // So Checked means Dark.
    
    if (!isChecked) {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        localStorage.setItem("theme", "light");
    } else {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
        localStorage.setItem("theme", "dark");
    }
});

// Trap the tab when menu is opened
const lastFocusedEl = document.querySelector('a[data-focused="last-focused"]');

document.body.addEventListener("keydown", (e) => {
    if (e.key === "Tab" && document.activeElement === lastFocusedEl && !nav.classList.contains("hidden")) {
        e.preventDefault();
        btnToggleNav.focus();
    }
});

/* --------------------------------- */
/* ----- Logo Animation -----*/
/* --------------------------------- */
const logosWrappers = document.querySelectorAll(".logo-group");
const sleep = (number) => new Promise((res) => setTimeout(res, number));

logosWrappers.forEach(async (logoWrapper, i) => {
    const logos = Array.from(logoWrapper.children);
    await sleep(1400 * i);
    setInterval(() => {
        let temp = logos[0];
        logos[0] = logos[1];
        logos[1] = logos[2];
        logos[2] = temp;
        logos[0].classList.add("hide", "to-top");
        logos[1].classList.remove("hide", "to-top", "to-bottom");
        logos[2].classList.add("hide", "to-bottom");
    }, 5600);
});

if (yearEl) yearEl.textContent = new Date().getFullYear();

// Skeleton loading removal
document.querySelectorAll('img.img-skeleton').forEach(img => {
    if (img.complete) {
        img.classList.remove('img-skeleton');
    } else {
        img.addEventListener('load', () => {
            img.classList.remove('img-skeleton');
        });
    }
});

/* --------------------------------- */
/* ----- Scroll Animations --------*/
/* --------------------------------- */
const scrollElements = document.querySelectorAll(".fade-in-scroll");

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const displayScrollElement = (element) => {
    element.classList.add("is-visible");
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        }
    });
};

window.addEventListener("scroll", () => {
    handleScrollAnimation();
});

/* --------------------------------- */
/* ----- Typewriter Effect -----*/
/* --------------------------------- */
const typewriterText = "Scalable Digital Systems";
const typewriterElement = document.querySelector('.gradient-text');

if (typewriterElement) {
    typewriterElement.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < typewriterText.length) {
            typewriterElement.textContent += typewriterText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    // Start after initial fade-in animations
    setTimeout(typeWriter, 1000);
}

/* --------------------------------- */
/* ----- Intelligent Resize Handler -----*/
/* --------------------------------- */
let lastWidth = window.innerWidth;

function handleMenuResize() {
    // Only run logic if width crosses breakpoint
    const currentWidth = window.innerWidth;
    
    // If transitioning to Desktop
    if (currentWidth >= 768) {
        nav.classList.remove('hidden');
        nav.style.visibility = 'visible';
        nav.style.transform = 'none';
        
        // Remove lock screen if stuck
        document.body.classList.remove("lock-screen");
        
        // Reset button text just in case
        btnToggleNav.textContent = "menu";
    } 
    // If transitioning to Mobile (and not already set)
    else if (lastWidth >= 768 && currentWidth < 768) {
        // Default to hidden when sizing down
        nav.classList.add('hidden');
        nav.style.visibility = '';
        nav.style.transform = '';
    }
    
    lastWidth = currentWidth;
}

window.addEventListener('resize', handleMenuResize);
// Run once on load to set initial state correctly
handleMenuResize();
