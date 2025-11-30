(function($) {
    "use strict";
    var CRE = {};
    $.fn.exists = function() {
        return this.length > 0;
    };

    /* ---------------------------------------------- /*
     * Pre load
    /* ---------------------------------------------- */
    CRE.PreLoad = function() {
        document.getElementById("loading").style.display = "none";
    }

    /*--------------------
      * Menu toogle header
    ----------------------*/
    CRE.MenuToggleClass = function() {
        $('.navbar-toggler').on('click', function() {
            var toggle = $('.navbar-toggler').is(':visible');
            if (toggle) {
                $('header').toggleClass('header-toggle');
            }
        })
    }

    /* ---------------------------------------------- /*
     * Header Fixed
    /* ---------------------------------------------- */
    CRE.HeaderFixd = function() {
        var HscrollTop = $(window).scrollTop();
        if (HscrollTop >= 100) {
            $(".navbar-dark").addClass("navbar-light");
            $(".navbar-dark").addClass("navbar-dark-top");
            $(".navbar-dark-top").removeClass("navbar-dark");
            $(".header-main").addClass("fixed-header");
        } else {
            $(".navbar-dark-top").removeClass("navbar-light");
            $(".navbar-dark-top").addClass("navbar-dark");
            $(".navbar-dark").removeClass("navbar-dark-top");
            $(".header-main").removeClass("fixed-header");
        }
    }
    
    /* ---------------------------------------------- /*
     * Header height
    /* ---------------------------------------------- */
    CRE.HeaderHeight = function() {
        var HHeight = $('.navbar').outerHeight()
        $('.header-height').css("min-height", HHeight);
    }

    /*-----------------------
    * SVG
    -------------------------*/
    var mySVGsToInject = document.querySelectorAll('.svg_img, .svg_icon');
    CRE.SVGbx = function() {
        if (mySVGsToInject.length > 0) {
            SVGInjector(mySVGsToInject);
        }
    }

    // Window on Load
    $(window).on("load", function() {
        CRE.PreLoad();
    });
    // Document on Ready
    $(document).ready(function() {
        CRE.SVGbx(),
        CRE.HeaderFixd(),
        CRE.MenuToggleClass(),
        CRE.HeaderHeight();
    });

    // Document on Scrool
    $(window).scroll(function() {
        CRE.HeaderFixd();
    });

    // Window on Resize
    $(window).resize(function() {
        CRE.HeaderHeight();
    });

})(jQuery);
$(document).ready(function () {
    $('.video-popup').magnificPopup({
        type: 'iframe',
        iframe: {
            markup:
                '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>'
        }
    });
});
