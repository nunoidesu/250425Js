$(function(){
    $(".slider").slick({
        autoplay: true,
        infinite: true,
        sliderToShow: 3,
        sliderToScroll: 3,
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>',
        dots: true,
    });
});