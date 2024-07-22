function hover(element) {
    document.getElementById(element).src = "images/" + element + "-white.png";
}

function gone(element) {
    document.getElementById(element).src = "images/" + element + "-colored.png";
}

document.addEventListener('DOMContentLoaded', () => {
    const profileImage = document.getElementById('profileImage');
    const overlay = document.querySelector('.overlay');

    profileImage.addEventListener('mouseenter', () => {
        if (profileImage.src.includes('images/bebop.gif')) {
            profileImage.src = 'images/kathir.jpg';
        } else {
            profileImage.src = 'images/bebop.gif';
        }
        overlay.style.opacity = '1';
    });

    profileImage.addEventListener('mouseleave', () => {
        overlay.style.opacity = '0'; // Hide overlay
    });
});