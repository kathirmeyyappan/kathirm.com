const profileImage = document.getElementById('profileImage');
const overlay = document.querySelector('.overlay');
var hasClickedProfile = false;

let c = 0
const pfps = [
    'images/kathir.jpg', 
    'images/bebop.gif', 
    'images/luffy.gif',
    'images/patrick.gif',
    'images/shrek.gif', 
    'images/subway-surfers.gif',
    'images/error.gif'
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

    profileImage.addEventListener('mouseleave', () => {
        overlay.style.opacity = '0'; // hide overlay
    });

    profileImage.addEventListener("click", function() {
        hasClickedProfile = true;
        clearTimeout(flashTimer);
        profileImage.classList.remove("flash-border");

        c = (c + 1) % pfps.length
        profileImage.src = pfps[c]; // next pfp
        overlay.style.opacity = '1'; // add overlay

        profileImage.style.cursor = 'default';
    });

    profileImage.addEventListener("mouseout", function() {
        profileImage.style.cursor = 'pointer';
        if (!hasClickedProfile) {
            startFlashTimer();
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