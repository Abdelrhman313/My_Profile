$(document).ready(function(){
    'use strict';

    var totalHeight = window.innerHeight;

    $(".App, .navbarSection").height(totalHeight);

    //toggle active class

    $(".navbarSection .menu li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    });

    //POP DIV Part

    $(".content>.overlay").click(function(){
        var nextelement = $(this).next(),
            img = $(nextelement).attr("src"),
            apperImag = "<div class='apperImg' onClick='closePop()'></div>";
        $(".Portfolio").prepend(apperImag);
        $(".Portfolio div:first-of-type").append(`<img src='${img}' alt='portfolio' />`);
        $(".content:nth-of-type(2),.content:nth-of-type(5)").css("margin-left","10%");
        $(".content:first-of-type,.content:nth-of-type(4)").css("margin-left","1%");        
    });

    //Navbar Collapse
    $(".collapse").on("click",function(){
        $(".menu").fadeToggle(200);
    });
});

function closePop(){
    $(".apperImg").remove();
    $(".apperImg img").remove();
    $(".content .overlay").empty();
    $(".content:nth-of-type(2),.content:nth-of-type(4)").css("margin-left","1%");
    $(".content:first-of-type,.content:nth-of-type(4)").css("margin-left","10%");
};