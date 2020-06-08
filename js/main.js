$(function(){

    $(".header__nav-gamburger").click(function() {
        $(".header__nav-items").toggleClass("active__menu"),
        $("body").toggleClass("active__body");         
        $(this).toggleClass("active");
    });

    $(".form__button").click(function() {
        $(".form__thank").toggleClass("active__text"),        
        $(this).toggleClass("active__text");
    });

    $(".form__btn").click(function() {
        $(".form__thank-body").toggleClass("active__text2"),        
        $(this).toggleClass("active__text2");
    });
});