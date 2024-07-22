function hover(element) {
    document.getElementById(element).src = "images/" + element + "-white.png";
}

function gone(element) {
    document.getElementById(element).src = "images/" + element + "-colored.png";
}

document.addEventListener('DOMContentLoaded', () => {
    const profileImage = document.getElementById('profileImage');
    const overlay = document.querySelector('.overlay');

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

    profileImage.addEventListener('mouseenter', () => {
        c = (c + 1) % pfps.length
        profileImage.src = pfps[c]; // next pfp

        overlay.style.opacity = '1'; // add overlay
    });

    // preload images
    pfps.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    profileImage.addEventListener('mouseleave', () => {
        overlay.style.opacity = '0'; // hide overlay
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var profileImage = document.getElementById("profileImage");
    var hasHovered = false;
    var flashTimer;

    function startFlashTimer() {
        flashTimer = setTimeout(function() {
            if (!hasHovered) {
                profileImage.classList.add("flash-border");
            }
        }, 4000);
    }

    profileImage.addEventListener("mouseover", function() {
        hasHovered = true;
        clearTimeout(flashTimer);
        profileImage.classList.remove("flash-border");
    });

    profileImage.addEventListener("mouseout", function() {
        if (!hasHovered) {
            startFlashTimer();
        }
    });

    startFlashTimer();
});