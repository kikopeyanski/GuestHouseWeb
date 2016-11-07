$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $('nav').addClass('shrink');
    } else {
        $('nav').removeClass('shrink');
    }
});
var pos = $("#jssor_2").offset();
$("#static-image").offset({top: pos.top, left: 0});

$('#map').on('click', function () {
    $('#map iframe').css("pointer-events", "auto");
    console.log("click")
});

$('#map').on('mouseleave', function () {
    $('#map iframe').css("pointer-events", "none");
});
