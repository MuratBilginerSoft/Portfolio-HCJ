let banner = document.querySelector('.mainContainer');
let menuToggle = document.querySelector('.toggle');

menuToggle.onclick = function () {
    menuToggle.classList.toggle('active');
    banner.classList.toggle('active');
}