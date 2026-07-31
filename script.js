/* ===========================
   De Fresh Bakery
   Interactive Scripts
=========================== */

// Navbar shadow + background on scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.style.background = "rgba(255,255,255,.95)";
        navbar.style.boxShadow = "0 15px 40px rgba(0,0,0,.15)";
        navbar.style.padding = "15px 35px";

    } else {

        navbar.style.background = "rgba(255,255,255,.75)";
        navbar.style.boxShadow = "0 15px 40px rgba(0,0,0,.12)";
        navbar.style.padding = "18px 35px";

    }

});

// Fade-in animation on scroll
const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");
    observer.observe(section);

});

// Active navigation link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const top = section.offsetTop - 120;

        if(window.scrollY >= top){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});

// Button ripple effect
document.querySelectorAll(".btn,.hero-btn").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

ripple.style.left=(e.clientX-rect.left)+"px";
ripple.style.top=(e.clientY-rect.top)+"px";

ripple.className="ripple";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

// Smooth reveal of cards
const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

observer.observe(card);

});

// Console welcome :)
console.log("%cWelcome to De Fresh Bakery!",
"color:#c7923e;font-size:20px;font-weight:bold;");

// Fade the hero slightly while scrolling

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    hero.style.backgroundPositionY = window.scrollY * 0.4 + "px";

});

// Product hover tilt effect

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*8;

const rotateX=((y/rect.height)-0.5)*-8;

card.style.transform=`perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(900px) rotateX(0) rotateY(0)";

});

});

/* ===========================
   Animated Counters
=========================== */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries => {

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.dataset.target;

let count=0;

const speed=target/120;

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.floor(count);

requestAnimationFrame(update);

}else{

counter.innerText=target.toLocaleString()+"+";

}

};

update();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter=>counterObserver.observe(counter));

/* ===========================
   Testimonial Slider
=========================== */

const testimonials=document.querySelectorAll(".testimonial");

let currentTestimonial=0;

setInterval(()=>{

testimonials[currentTestimonial].classList.remove("active");

currentTestimonial++;

if(currentTestimonial>=testimonials.length){

currentTestimonial=0;

}

testimonials[currentTestimonial].classList.add("active");

},5000);

/* ===========================
Mobile Menu
=========================== */

const menuToggle=document.getElementById("menuToggle");

const navMenu=document.getElementById("navMenu");

menuToggle.addEventListener("click",()=>{

navMenu.classList.toggle("active");

});

/* ===========================
Scroll Progress
=========================== */

const progress=document.getElementById("progressBar");

window.addEventListener("scroll",()=>{

const total=document.documentElement.scrollHeight-window.innerHeight;

const progressValue=(window.scrollY/total)*100;

progress.style.width=progressValue+"%";

});

/* ===========================
Back To Top
=========================== */

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

if (topBtn) {

    topBtn.onclick = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    };

}

/* ===========================
Dark Mode
=========================== */

const toggle=document.getElementById("themeToggle");

const body=document.body;

if(localStorage.getItem("theme")==="dark"){

body.classList.add("dark");

toggle.innerHTML="☀️";

}

toggle.addEventListener("click",()=>{

body.classList.toggle("dark");

if(body.classList.contains("dark")){

localStorage.setItem("theme","dark");

toggle.innerHTML="☀️";

}else{

localStorage.setItem("theme","light");

toggle.innerHTML="🌙";

}

});

/* ===========================
Menu Tabs
=========================== */

const tabs=document.querySelectorAll(".menu-tab");

const categories=document.querySelectorAll(".menu-category");

tabs.forEach(tab=>{

tab.addEventListener("click",()=>{

tabs.forEach(t=>t.classList.remove("active"));

categories.forEach(c=>c.classList.remove("active"));

tab.classList.add("active");

document.getElementById(tab.dataset.category).classList.add("active");

});

});
/* ===========================
   Gallery Lightbox
=========================== */

const galleryImages = document.querySelectorAll(".gallery-grid img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const closeLightbox = document.querySelector(".close-lightbox");

galleryImages.forEach(image=>{

image.addEventListener("click",()=>{

lightbox.classList.add("active");

lightboxImg.src=image.src;

lightboxImg.alt=image.alt;

});

});

closeLightbox.addEventListener("click",()=>{

lightbox.classList.remove("active");

});

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.classList.remove("active");

}

});