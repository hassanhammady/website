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

// show menu on mobile view 

$(document).ready(function () {
    // Check if it's a touch device (mobile)
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      let tappedLink = null;

      $('.navbar .dropdown > a').on('click', function (e) {
        const $link = $(this);
        const $parent = $link.parent();
        const $submenu = $parent.find('.dropdown-menu, .dropdown-mega').first();

        // If submenu is not shown yet
        if (!$submenu.hasClass('show')) {
          e.preventDefault(); // Prevent immediate navigation
          $('.dropdown-menu.show, .dropdown-mega.show').removeClass('show'); // Close others
          $submenu.addClass('show');
          tappedLink = this; // mark this as tapped
        } else if (tappedLink === this) {
          // Second tap - allow navigation
          window.location = $link.attr('href');
        }
      });

      // Click outside to close
      $(document).on('click', function (e) {
        if (!$(e.target).closest('.navbar .dropdown').length) {
          $('.dropdown-menu.show, .dropdown-mega.show').removeClass('show');
          tappedLink = null;
        }
      });
    }
});

// Smooth scrolling for navigation links (optional)
$(document).ready(function() {

    // Smooth scrolling for navigation links (optional)
    $('a.nav-link[href^="#"]').on('click', function(event) {
        var target = $(this.hash);
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - $('.navbar').outerHeight() // Adjust for fixed navbar height
            }, 800);
        }
    });

    // Add shadow to navbar on scroll (optional, but common for transparent navbars)
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) { // If scrolled more than 50px
            $('.navbar').css('background-color', '#fff'); // Darker background
            $('.navbar').addClass('shadow-sm'); // Add shadow
        } else {
            $('.navbar').css('background-color', '#fff'); // Original transparent background
            $('.navbar').removeClass('shadow-sm'); // Remove shadow
        }
    });
});

// animate elements on scroll
AOS.init({
    duration: 800, // animation duration in ms
    once: false, // whether animation should happen only once
    // disable: function () {
    //     return window.innerWidth < 768; // Disable below 768px
    // }
});
