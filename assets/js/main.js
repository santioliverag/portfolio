//Light mode and Dark mode

var btnChange = document.getElementById("portfolio-change");
var icon = document.getElementById("portfolio-change-icon")

btnChange.onclick = function() {
    document.body.classList.toggle('light');
    if(document.body.classList.contains('light')) {
        icon.classList.remove('ri-sun-line');
        icon.classList.add('ri-moon-fill');
    }else {
        icon.classList.remove('ri-moon-fill');
        icon.classList.add('ri-sun-line');
    }
}