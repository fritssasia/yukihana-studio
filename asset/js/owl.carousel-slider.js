// Slider : Our Works
var sliderOurWorks = $('#sliderOurWork');
sliderOurWorks.owlCarousel({
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

// Custom Owl Carousel Navigation Button
$(".btn-slider-pricing-prev").click(function () {
    sliderPricing.trigger('prev.owl.carousel');
});
$(".btn-slider-pricing-next").click(function () {
    sliderPricing.trigger('next.owl.carousel');
});

$(".btn-slider-our-works-prev").click(function () {
    sliderOurWorks.trigger('prev.owl.carousel');
});
$(".btn-slider-our-works-next").click(function () {
    sliderOurWorks.trigger('next.owl.carousel');
});