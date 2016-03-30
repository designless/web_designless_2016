/*
 * searchua
 * version: 0.1.0
 * lastupdate: 2014-01-20
 * author: Masaki Hongo
 * git: https://github.com/masakihongo/searchUA
 * license: MIT
 */
! function(a, b) {
    "use strict";
    a.ua = {};
    var c = a.ua;
    c.name = a.navigator.userAgent.toLowerCase(),
        c.isIE = c.name.indexOf("msie") >= 0 || c.name.indexOf("trident") >= 0,
        c.isiPhone = c.name.indexOf("iphone") >= 0,
        c.isiPod = c.name.indexOf("ipod") >= 0, c.isiPad = c.name.indexOf("ipad") >= 0,
        c.isiOS = c.isiPhone || c.isiPod || c.isiPad, c.isAndroid = c.name.indexOf("android") >= 0,
        c.isTablet = c.isiPad || c.isAndroid && c.name.indexOf("mobile") < 0,
        c.isIE && (c.verArray = /(msie|rv:?)\s?([0-9]{1,})([\.0-9]{1,})/.exec(c.name),
            c.verArray && (c.ver = parseInt(c.verArray[2], 10))), c.isiOS && (c.verArray = /(os)\s([0-9]{1,})([\_0-9]{1,})/.exec(c.name),
            c.verArray && (c.ver = parseInt(c.verArray[2], 10))), c.isAndroid && (c.verArray = /(android)\s([0-9]{1,})([\.0-9]{1,})/.exec(c.name),
            c.verArray && (c.ver = parseInt(c.verArray[2], 10))),
        c.isIE && b("body").addClass("ie ie_" + c.ver), c.isiPhone && b("body").addClass("iPhone"),
        c.isiPod && b("body").addClass("iPod"), c.isiPad && b("body").addClass("iPad"), c.isiOS && b("body").addClass("iOS iOS_" + c.ver),
        c.isAndroid && b("body").addClass("android android_" + c.ver), c.isTablet && b("body").addClass("tablet")
}(this, jQuery);

$(function() {
    $(".work-list > dd").hide();
    $(".work-list > dt").on("click", function() {
        $(this).next().slideToggle();
    });

    $('#top').vegas({
        slides: [
            { src: '/images/bg.png' },
            { src: '/images/global.jpg' },
            { src: '/images/rule.jpg' },
            { src: '/images/codegirls.jpg' },
            { src: '/images/flat-food.png' },
            { src: '/images/flight.jpg' },
            { src: '/images/t4t.png' },
            { src: '/images/github.jpg' },
            { src: '/images/pelican.jpg' },
            { src: '/images/editer.jpg' }
        ],
        overlay: '/images/overlay.png'
    });
});
