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

document.getElementById("contact-form").addEventListener("submit", function(e){

e.preventDefault();

emailjs.sendForm(
'YOUR_SERVICE_ID',
'YOUR_TEMPLATE_ID',
this
)

.then(function(){

alert("Message Sent Successfully ✅");

document.getElementById("contact-form").reset();

},function(error){

alert("Failed ❌");

});

});



document.getElementById("contact-form").addEventListener("submit", function(e){

    e.preventDefault();
    
    emailjs.sendForm(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    this
    )
    
    .then(function(){
    
    alert("Message Sent Successfully ✅");
    
    document.getElementById("contact-form").reset();
    
    },function(error){
    
    alert("Failed ❌");
    
    });
    
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

