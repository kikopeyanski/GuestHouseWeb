$(".thumbnails1-img").on("click",function() {
    var src = $(this).attr("src");
    console.log(src);
    $("#house1-image").attr("src", src);
});
$(".thumbnails2-img").on("click",function() {
    var src = $(this).attr("src");
    console.log(src);
    $("#house2-image").attr("src", src);
});

$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('nav').addClass('shrink');
    } else {
        $('nav').removeClass('shrink');
    }
});
