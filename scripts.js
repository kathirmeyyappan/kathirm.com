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
        profileImage.src = 'images/kathir.jpg'; // Change to your new image URL
        overlay.style.opacity = '1'; // Show overlay
    });

    profileImage.addEventListener('mouseleave', () => {
        profileImage.src = 'images/bebop.gif'; // Revert to original image URL
        overlay.style.opacity = '0'; // Hide overlay
    });
});