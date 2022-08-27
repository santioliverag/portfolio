//Light mode and dark mode

$(document).ready(function() {
    $('.portfolio-change-dark').click(function(){
        $('body').addClass('light');
        $('body').removeClass('dark');
    });
    $('.portfolio-change').click(function(){
        $('body').removeClass('light');
        $('body').addClass('dark');
    });
    var anio = (new Date).getFullYear();
    $("#fecha").text( anio );

    document.getElementById("year").innerHTML = new Date().getFullYear();

});