$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $('nav').addClass('shrink');
    } else {
        $('nav').removeClass('shrink');
    }
});

$('#map').on('click', function () {
    $('#map iframe').css("pointer-events", "auto");
});

$('#map').on('mouseleave', function () {
    $('#map iframe').css("pointer-events", "none");
});
$('#open-terms').on('click',function () {
        $('#general-terms').css('display','inline');
});

$("#open-terms").click(function(event) {
    $('#general-terms').css('display','inline');
    event.stopPropagation();
});
$(document).click(function() {
    $('#general-terms').css('display','none');
});
