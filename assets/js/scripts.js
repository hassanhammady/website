// scroll to top functionality
$(window).on("scroll", function () {
    if ($(this).scrollTop() > 200) {
        $('#backToTop').fadeIn();
    } else {
        $('#backToTop').fadeOut();
    }
});

// Scroll to top
$('#backToTop').on("click", function () {
    $('html, body').animate({ scrollTop: 0 }, 600);
    return false;
});

