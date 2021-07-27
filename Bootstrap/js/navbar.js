$(window).scroll(function(){
    if ($("#menu").offset().top > 50) {
        $("#menu").addClass("navbar-gris");
    } else{
        $("#menu").removeClass("navbar-gris");
    }
});