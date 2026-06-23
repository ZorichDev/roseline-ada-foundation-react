import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * The original template (assets/js/main.js) initializes jQuery plugins
 * (Slick sliders, niceSelect, Isotope, Magnific Popup, counters, etc.)
 * once on $(document).ready(). In a single-page React app, that only
 * fires once for the very first page a person lands on - it never runs
 * again as they navigate client-side between routes.
 *
 * This hook re-runs the page-specific (DOM-query-based) plugin inits
 * every time the route changes, so every page's widgets work whether
 * it's the first page loaded or the tenth one navigated to.
 *
 * Things that use Bootstrap 5's native JS (modals, accordions/collapse,
 * the mobile navbar toggle) do NOT need this - Bootstrap 5 attaches
 * delegated listeners on `document` once, so those keep working
 * automatically for any markup React renders, on any page.
 */
export default function usePagePlugins() {
    const location = useLocation()

    useEffect(() => {
        const $ = window.jQuery
        if (!$) return

        // Run after the DOM has actually committed the new page's markup
        const timer = setTimeout(() => {
            const leftArrow = '<button class="left-arrow"><i class="flaticon-left-chevron"></i></button>'
            const rightArrow = '<button class="right-arrow"><i class="flaticon-next"></i></button>'

            // ---- Counters (appear-triggered count-up) ----
            if ($('.counter-text-wrap').length) {
                $('.counter-text-wrap').appear(function () {
                    const $t = $(this)
                    const n = $t.find('.count-text').attr('data-stop')
                    const r = parseInt($t.find('.count-text').attr('data-speed'), 10)
                    if (!$t.hasClass('counted')) {
                        $t.addClass('counted')
                        $({ countNum: $t.find('.count-text').text() }).animate(
                            { countNum: n },
                            {
                                duration: r,
                                easing: 'linear',
                                step: function () {
                                    $t.find('.count-text').text(Math.floor(this.countNum))
                                },
                                complete: function () {
                                    $t.find('.count-text').text(this.countNum)
                                },
                            }
                        )
                    }
                }, { accY: 0 })
            }

            // ---- Slick sliders ----
            const sliderConfigs = [
                ['.feature-left-slider', { slidesToShow: 1, slidesToScroll: 1, arrows: false, autoplay: true, fade: false, dots: true, autoplaySpeed: 5000 }],
                ['.feature-right-slider', { slidesToShow: 3, slidesToScroll: 1, arrows: true, autoplay: true, fade: false, prevArrow: '.feature-prev', nextArrow: '.feature-next', autoplaySpeed: 5000, responsive: [{ breakpoint: 991, settings: { slidesToShow: 2 } }, { breakpoint: 575, settings: { slidesToShow: 1 } }] }],
                ['.course-page-slider', { slidesToShow: 3, slidesToScroll: 1, arrows: false, autoplay: true, fade: false, dots: true, autoplaySpeed: 2000, responsive: [{ breakpoint: 1200, settings: { slidesToShow: 2 } }, { breakpoint: 767, settings: { slidesToShow: 1 } }] }],
                ['.blog-page-slider', { slidesToShow: 3, slidesToScroll: 1, arrows: false, autoplay: true, fade: false, dots: true, autoplaySpeed: 2000, responsive: [{ breakpoint: 1200, settings: { slidesToShow: 2 } }, { breakpoint: 767, settings: { slidesToShow: 1 } }] }],
                ['.events-slider-active', { slidesToShow: 3, slidesToScroll: 1, arrows: true, autoplay: true, fade: false, dots: false, prevArrow: leftArrow, nextArrow: rightArrow, autoplaySpeed: 2000, responsive: [{ breakpoint: 1200, settings: { slidesToShow: 2 } }, { breakpoint: 767, settings: { slidesToShow: 1 } }] }],
                ['.event-three-slider', { slidesToShow: 2, slidesToScroll: 1, arrows: false, autoplay: true, fade: false, autoplaySpeed: 2000, responsive: [{ breakpoint: 767, settings: { slidesToShow: 1 } }] }],
                ['.about-middle-images', { slidesToShow: 3, slidesToScroll: 1, arrows: false, autoplay: true, fade: false, autoplaySpeed: 2000, responsive: [{ breakpoint: 1200, settings: { slidesToShow: 4 } }, { breakpoint: 991, settings: { slidesToShow: 3 } }, { breakpoint: 575, settings: { slidesToShow: 2 } }, { breakpoint: 375, settings: { slidesToShow: 1 } }] }],
                ['.client-logo-wrap', { slidesToShow: 5, slidesToScroll: 1, arrows: false, autoplay: true, fade: false, autoplaySpeed: 2000, responsive: [{ breakpoint: 1200, settings: { slidesToShow: 4 } }, { breakpoint: 991, settings: { slidesToShow: 3 } }, { breakpoint: 767, settings: { slidesToShow: 2 } }, { breakpoint: 375, settings: { slidesToShow: 1 } }] }],
            ]
            sliderConfigs.forEach(([selector, config]) => {
                const $el = $(selector)
                if ($el.length && !$el.hasClass('slick-initialized')) {
                    $el.slick(config)
                }
            })

            // Testimonial slider pair (linked via asNavFor)
            const $tcs = $('.testimonial-content-slider')
            const $tts = $('.testimonial-thumb-slider')
            const $ttt = $('.testimonial-thumb-two')
            if ($tcs.length && !$tcs.hasClass('slick-initialized')) {
                $tcs.slick({ slidesToShow: 1, slidesToScroll: 1, arrows: false, autoplay: false, fade: true, autoplaySpeed: 1000, asNavFor: '.testimonial-thumb-slider' })
            }
            if ($tts.length && !$tts.hasClass('slick-initialized')) {
                $tts.slick({ slidesToShow: 3, slidesToScroll: 1, asNavFor: '.testimonial-content-slider', dots: false, autoplay: false, variableWidth: true, autoplaySpeed: 1000, centerMode: false, focusOnSelect: true, arrows: false })
            }
            if ($ttt.length && !$ttt.hasClass('slick-initialized')) {
                $ttt.slick({ slidesToShow: 3, slidesToScroll: 1, asNavFor: '.testimonial-content-slider', dots: false, vertical: true, verticalSwiping: true, focusOnSelect: true, arrows: false })
            }

            // ---- Event masonry (Isotope) ----
            if ($('.events-active').length) {
                $('.events-active').imagesLoaded(function () {
                    $('.events-active').isotope({
                        itemSelector: '.item',
                        percentPosition: true,
                        masonry: { columnWidth: '.item' },
                    })
                })
            }

            // ---- Portfolio filter (Isotope) ----
            $('.portfolio-filter li').off('click.vcedi').on('click.vcedi', function () {
                $('.portfolio-filter li').removeClass('current')
                $(this).addClass('current')
                const selector = $(this).attr('data-filter')
                $('.portfolio-active').imagesLoaded(function () {
                    $('.portfolio-active').isotope({
                        itemSelector: '.item',
                        filter: selector,
                    })
                })
            })

            // ---- niceSelect ----
            if ($('.single-select').length) {
                $('.single-select').each(function () {
                    if (!$(this).next('.nice-select').length) {
                        $(this).niceSelect()
                    }
                })
            }

            // ---- Magnific Popup ----
            if ($('.gallery-photos a').length) {
                $('.gallery-photos a').magnificPopup({
                    type: 'image',
                    mainClass: 'mfp-with-zoom',
                    gallery: { enabled: true },
                })
            }
            if ($('.video-play').length) {
                $('.video-play').magnificPopup({
                    type: 'iframe',
                    removalDelay: 260,
                    mainClass: 'mfp-zoom-in',
                })
            }

            // ---- Circle progress (causes pages) ----
            if ($.fn.circleProgress) {
                const circles = [
                    ['.circle-progress.one', 0.8, '#F84D42', 90],
                    ['.circle-progress.two', 0.7, '#FFB840', 85],
                    ['.circle-progress.three', 0.55, '#20B86D', 55],
                ]
                circles.forEach(([selector, value, fill, label]) => {
                    const $el = $(selector)
                    if ($el.length) {
                        $el.appear(function () {
                            $el.circleProgress({
                                value,
                                size: 88,
                                thickness: 5,
                                fill,
                                lineCap: 'round',
                                emptyFill: '#FAFAFA',
                                startAngle: (-Math.PI / 4) * 2,
                                animation: { duration: 2000 },
                            }).on('circle-animation-progress', function (event, progress) {
                                $(this).find('b').html(Math.round(label * progress) + '<span>%</span>')
                            })
                        })
                    }
                })
            }

            // ---- Skill bars ----
            if ($('.skillbar').length) {
                $('.skillbar').appear(function () {
                    $('.skillbar').skillBars({ from: 0, speed: 4000, interval: 100 })
                })
            }
        }, 0)

        return () => clearTimeout(timer)
    }, [location.pathname])
}
