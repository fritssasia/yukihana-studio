// Slider - Our Works - Music Video : Start
var sliderOurWorks = $('.sliderOurWorks')
$('#sliderOurWorksMusicVideo').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        }
    }
});
// Slider - Our Works - Music Video : End

// Slider - Our Works - Preview Video : Start
$('#sliderOurWorksPreviewVideo').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        }
    }
});
// Slider - Our Works - Preview Video : Start

// Slider - Our Works - Custom Navigation Button : Start
$(".btn-slider-our-works-prev").click(function () {
    sliderOurWorks.trigger('prev.owl.carousel');
});
$(".btn-slider-our-works-next").click(function () {
    sliderOurWorks.trigger('next.owl.carousel');
});
// Slider - Our Works - Custom Navigation Button : End

// Slider : Pricing
var sliderPricing = $('#sliderPricing');
sliderPricing.owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        900: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});

$(".btn-slider-pricing-prev").click(function () {
    sliderPricing.trigger('prev.owl.carousel');
});
$(".btn-slider-pricing-next").click(function () {
    sliderPricing.trigger('next.owl.carousel');
});