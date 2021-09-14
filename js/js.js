/* Wait for the web page to load */
$(document).ready(function(){
    /* Code for the rollover effect on card-like images */
    $("figure.fig-image").hover(function() {
        $(this).find(".overlay").animate({opacity : "0.8"}, function() {
            $(this).find(".overlay-text").slideDown();
        });
    }, function() {
        $(this).find(".overlay").animate({opacity : "0"}, function() {
            $(this).find(".overlay-text").slideUp();
        });
    });

    /* Code to show off the lightbox */
    $("figure.fig-image").click(function() {
        $(this).next().fadeIn().css("display", "flex");
    });

    /* Code to close off the lightbox when the users click on the outside of the lightbox */
    $(".lightbox").click(function(event) {
        if ($(event.target).is(".lightbox")) {
            $(this).fadeOut();
        };
    });

    /* Code for switching the page */
    var previous = $("#page-one");
    $("nav a").click(function() {
        if ($(this).is("#menu-one")) {
            $("html, body").animate({
                scrollTop: $("#page-one").offset().top
            }, 1000);

            previous.fadeOut(function() {
                $("#page-one").fadeIn().css("display", "flex");
                
                previous = $("#page-one");
            });
        } else if ($(this).is("#menu-two")) {
            $("html, body").animate({
                scrollTop: $("#page-two").offset().top
            }, 1000);
            
            previous.fadeOut(function() {
                $("#page-two").fadeIn().css("display", "flex");

                previous = $("#page-two");
            });
        } else if ($(this).is("#menu-three")) {
            $("html, body").animate({
                scrollTop: $("#page-three").offset().top
            }, 1000);

            previous.fadeOut(function() {
                $("#page-three").fadeIn().css("display", "flex");

                previous = $("#page-three");
            });
        } else {
            $("html, body").animate({
                scrollTop: $("#page-four").offset().top
            }, 1000);

            previous.fadeOut(function() {
                $("#page-four").fadeIn().css("display", "flex");

                previous = $("#page-four");
            });
        };
    });

    /* Code for switching to other heroes on page 2 */
    $("#hero-icons-page-two img").mouseenter(function() {
        var index = $(this).parent().index();
        
        $(this).closest("div").prevAll().css("display", "none");

        $(this).closest("div").prevAll().eq(index).fadeIn().css("display", "flex");
    });

    /* Code for switching to other heroes on page 4 */
    $("#hero-icons-page-four img").mouseenter(function() {
        var index = $(this).parent().index();
        
        $(this).closest("div").prevAll().css("display", "none");

        $(this).closest("div").prevAll().eq(index).fadeIn().css("display", "flex");
    });

    /* Code for switching to other abilities on page 3 */
    $(".abilities-lightbox img").click(function() {
        var index = $(this).parent().index();

        $(this).closest("div").nextAll().css("display", "none");

        $(this).closest("div").nextAll().eq(index).fadeIn().css("display", "flex");
    });

});