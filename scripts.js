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
        profileImage.src = pfps[c];
        overlay.style.opacity = '1';
    });

    profileImage.addEventListener('mouseleave', () => {
        overlay.style.opacity = '0'; // Hide overlay
    });
});