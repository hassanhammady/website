// header carousel
var splide = new Splide( '.splide', {
        type   : 'loop',
        perPage : 1,
        autoplay: true,
        breakpoints: {
            768: {
                perPage: 1,
                height : '100%',
            },
            520: {
                perPage: 1,
                height : '100%',
            },
        },
    } 
);
splide.mount();

// products carousel
var splideProducts = new Splide( '.splide.products', {
    type   : 'loop',
    drag   : 'free',
    perPage: 4,
    gap    : '10px',
    breakpoints: {
            768: {
                perPage: 3,
                gap    : '10px',
                height : '100%',
            },
            520: {
                perPage: 2,
                gap    : '10px',
                height : '100%',
            },
        },
    } 
);
splideProducts.mount();

// accessories carousel

var splideAccessories = new Splide( '.splide.accessories', {
    type   : 'loop',
    drag   : 'free',
    perPage: 4,
    gap    : '10px',
    breakpoints: {
            768: {
                perPage: 3,
                gap    : '10px',
                height : '100%',
            },
            520: {
                perPage: 2,
                gap    : '10px',
                height : '100%',
            },
        },
    } 
);
splideAccessories.mount();

// brands carousel

var splideBrand = new Splide( '.splide.brand', {
    type   : 'loop',
    drag   : 'free',
    perPage: 5,
    gap    : '15px',
    breakpoints: {
            768: {
                perPage: 4,
                gap    : '10px',
                height : '100%',
            },
            520: {
                perPage: 3,
                gap    : '10px',
                height : '100%',
            },
        },
    } 
);
splideBrand.mount();
