function openMenu() {
    document.getElementById("menu").style.width = "20%";
}

function closeMenu() {
    document.getElementById("menu").style.width = "0";
}


function openWindow() {
    document.getElementById("window").style.animationName = "animateTop";
    document.getElementById("window").style.display = "block";
}

function closeWindow() {
   document.getElementById("window").style.animationName = "animateDown";
   document.getElementById("window").style.display = "none";
}