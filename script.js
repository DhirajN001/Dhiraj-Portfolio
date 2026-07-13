const roles = [
    "Technical Support Engineer",
    "Desktop Support Engineer",
    "IT Support Engineer",
    "Hardware Support Engineer",
    "Windows Support Engineer"
];

let roleIndex = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {

    const typing = document.getElementById("typing");

    if (!typing) return;

    if (!isDeleting) {

        currentText = roles[roleIndex].substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === roles[roleIndex].length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        currentText = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            roleIndex++;

            if (roleIndex === roles.length) {
                roleIndex = 0;
            }
        }

    }

    typing.textContent = currentText;

    setTimeout(typeEffect, isDeleting ? 40 : 90);
}

typeEffect();

AOS.init({
    duration: 1000,
    once: true
});

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if(document.body.scrollTop > 300 ||
       document.documentElement.scrollTop > 300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";
    }
};

topBtn.onclick = function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

    // Theme Toggle

const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", ()=>{

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){

        themeBtn.innerHTML="🌞";

    }else{

        themeBtn.innerHTML="🌙";

    }

});

// Animated Counter

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.getAttribute("data-target");

        let count = 0;

        const updateCounter = () => {

            const increment = target / 50;

            if(count < target){

                count += increment;

                counter.innerText = Math.ceil(count);

                setTimeout(updateCounter,20);

            }

            else{

                counter.innerText = target + "+";

            }

        }

        updateCounter();

    });

}

const aboutSection = document.querySelector("#about");

let counterStarted = false;

window.addEventListener("scroll",()=>{

    if(counterStarted) return;

    const sectionTop = aboutSection.getBoundingClientRect().top;

    if(sectionTop < window.innerHeight-150){

        startCounter();

        counterStarted = true;

    }

});

// Scroll Progress Bar

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / scrollHeight) * 100;

    document.getElementById("progress-bar").style.width =
        progress + "%";

});

// Loader

window.addEventListener("load",()=>{

    setTimeout(()=>{
    
    document.getElementById("loader").style.opacity="0";
    
    document.getElementById("loader").style.visibility="hidden";
    
    },1200);
    
    });

    tsParticles.load("particles-js",{

        background:{
        color:"#0f172a"
        },
        
        fpsLimit:60,
        
        particles:{
        
        number:{
        value:45
        },
        
        color:{
        value:"#3b82f6"
        },
        
        shape:{
        type:"circle"
        },
        
        opacity:{
        value:0.3
        },
        
        size:{
        value:3
        },
        
        move:{
        enable:true,
        speed:1,
        direction:"none",
        outModes:{
        default:"bounce"
        }
        },
        
        links:{
        enable:true,
        distance:150,
        color:"#3b82f6",
        opacity:0.25,
        width:1
        }
        
        },
        
        detectRetina:true
        
        });

        emailjs.init("8St7IPwxSRebL5ouz");

const form = document.getElementById("contact-form");
const status = document.getElementById("status");
const sendBtn = document.getElementById("sendBtn");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    sendBtn.innerHTML = "Sending...";
    sendBtn.disabled = true;

    emailjs.sendForm(
        "service_22wolgb",
        "template_79b098e",
        this
    )

    .then(() => {

        status.innerHTML = "✅ Message Sent Successfully!";
        status.style.color = "#3b82f6";

        form.reset();

        sendBtn.innerHTML = "Send Message";
        sendBtn.disabled = false;

    })

    .catch((error) => {

        console.log(error);
    
        alert(error.text);
    
    });

});