//move when pressing next and back
let step = 100;
let stepFilter = 60;
let scrolling = true;

$(".back").bind("click", function(e){
    e.preventDefault();
    $(".highligh-wrapper").animate({
        scrollLeft: "-=" + step + "px"

    });

});


$(".next").bind("click", function(e){
    e.preventDefault();
    $(".highligh-wrapper").animate({
        scrollLeft: "-=" + step + "px"

    });

});

