$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('nav').addClass('shrink');
    } else {
        $('nav').removeClass('shrink');
    }
});

var htmlTemplate = "gallery.html";


var btn= $("#gallery-load");
btn.on("click",function () {
    $("#gallery").load("Gallery-Slider/gallery.html");
    console.log("succes")
});