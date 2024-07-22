const profileImage = document.getElementById('profileImage');
const body = document.getElementById("body")
const overlay = document.querySelector('.overlay');
var hasClickedProfile = false;

let c = 0
const pfps = [
    'images/kathir.jpg', 
    'images/bebop.gif', 
    'images/luffy.gif',
    'images/patrick.gif',
    'images/shrek.gif', 
    'images/subway-surfers.gif'
]

function startFlashTimer() {
    flashTimer = setTimeout(function() {
        if (!hasClickedProfile) {
            profileImage.classList.add("flash-border");
        }
    }, 500);
}

document.addEventListener('DOMContentLoaded', () => {
    
    // preload images
    pfps.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    var profileImage = document.getElementById("profileImage");
    profileImage.style.cursor = 'pointer';

    document.addEventListener('click', (e) => {
        target = document.elementFromPoint(e.clientX, e.clientY);
        if (target != profileImage && target.className != "inline") {

            // remove collision for logos
            logos = document.getElementsByClassName('inline');
            for (let i = 0; i < logos.length; i++) {
                logos[i].style.pointerEvents = 'none';
            }

            if (overlay.style.opacity == '1') {
                c = (c + 1) % pfps.length;
                profileImage.src = pfps[c]; // next pfp
            }      
            overlay.style.opacity = '0'; // hide overlay
            profileImage.style.cursor = 'pointer';
        }
    });

    profileImage.addEventListener("click", () => {
        if (profileImage.style.cursor == 'pointer') {
            hasClickedProfile = true;
            clearTimeout(flashTimer);
            profileImage.classList.remove("flash-border");

            // add collision for logos
            logos = document.getElementsByClassName('inline');
            for (let i = 0; i < logos.length; i++) {
                logos[i].style.pointerEvents = 'auto';
            }

            profileImage.src = 'images/error.gif'; // buffer pfp
            overlay.style.opacity = '1'; // add overlay

            profileImage.style.cursor = 'default';
        }
    });

    startFlashTimer();
});

function btn_hover(element) {
    document.getElementById(element).src = "images/" + element + "-white.png";
}

function btn_gone(element) {
    document.getElementById(element).src = "images/" + element + "-colored.png";
}