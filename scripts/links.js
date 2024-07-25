function btn_hover(element) {
    document.getElementById(element).src = "images/" + element + "-white.png";
}

function btn_gone(element) {
    document.getElementById(element).src = "images/" + element + "-colored.png";
}