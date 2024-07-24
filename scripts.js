const profileImage = document.getElementById('profileImage');
const notifBubble = document.getElementById('notifBubble')
const body = document.getElementById("body")
const overlay = document.querySelector('.overlay');
var hasClickedProfile = false;

let c = 0;
const pfps = [
    'images/kathir.jpg', 
    'images/bebop.gif', 
    'images/luffy.gif',
    'images/patrick.gif',
    'images/shrek.gif', 
    'images/subway-surfers.gif'
];

function startNotifTimer() {
    notifTimer = setTimeout(function() {
        if (!hasClickedProfile) {
            notifBubble.style.display = "block";
            notifBubble.classList.add("appear");
        }
    }, 2000);
    // notifTimer = setTimeout(function() {
    //     if (!hasClickedProfile) {
    //         notifBubble.classList.add("notif-bulge");
    //     }
    // }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
    
    // preload images
    const img = new Image();
    img.src = 'images/error.gif';
    pfps.forEach(src => {
        const img = new Image();
        img.src = src;
    });
    ['linkedin', 'mail', 'mangalert', 'cv', 'github'].forEach((logo) => {
        const img = new Image();
        img.src = `images/${logo}-white.png`;
    })

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

            if (c == 0) {
                hasClickedProfile = false;
                startNotifTimer();
            }
        }
    });

    profileImage.addEventListener("click", () => {
        if (profileImage.style.cursor == 'pointer') {
            hasClickedProfile = true;
            clearTimeout(notifTimer);
            notifBubble.style.display = "none";

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

    startNotifTimer();
});

function btn_hover(element) {
    document.getElementById(element).src = "images/" + element + "-white.png";
}

function btn_gone(element) {
    document.getElementById(element).src = "images/" + element + "-colored.png";
}