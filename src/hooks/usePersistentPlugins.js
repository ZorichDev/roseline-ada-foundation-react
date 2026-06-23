import { useEffect } from 'react'

/**
 * Things from the original main.js that only need to run ONCE for the
 * whole app lifetime, because they either bind delegated listeners on
 * `document`/`window` (which keep working no matter what React renders
 * afterwards) or set up the navbar/footer chrome, which is part of the
 * persistent Layout and never unmounts between route changes.
 */
export default function usePersistentPlugins() {
    useEffect(() => {
        const $ = window.jQuery
        if (!$) return

        $(document).on('click', '.navbar-area .navbar-nav li.menu-item-has-children>a', function (e) {
            e.preventDefault()
        })

        $('.navbar-area .menu').on('click', function () {
            $(this).toggleClass('open')
            $('.navbar-area .navbar-collapse').toggleClass('sopen')
        })

        if ($(window).width() < 992) {
            $('.in-mobile').clone().appendTo('.sidebar-inner')
            $('.in-mobile ul li.menu-item-has-children').append('<i class="fas fa-chevron-right"></i>')

            $('.menu-item-has-children a').on('click', function () {
                $(this).siblings('.sub-menu').animate({ height: 'toggle' }, 300)
            })
        }

        const menutoggle = $('.menu-toggle')
        const mainmenu = $('.navbar-nav')
        menutoggle.on('click', function () {
            if (menutoggle.hasClass('is-active')) {
                mainmenu.removeClass('menu-open')
            } else {
                mainmenu.addClass('menu-open')
            }
        })

        const bodyOverlay = $('#body-overlay')
        const searchPopup = $('#td-search-popup')
        const sidebarMenu = $('#sidebar-menu')

        $(document).on('click', '#body-overlay', function (e) {
            e.preventDefault()
            bodyOverlay.removeClass('active')
            searchPopup.removeClass('active')
            sidebarMenu.removeClass('active')
        })
        $(document).on('click', '.search-bar-btn', function (e) {
            e.preventDefault()
            searchPopup.addClass('active')
            bodyOverlay.addClass('active')
        })

        $(document).on('click', '.back-to-top', function () {
            $('html,body').animate({ scrollTop: 0 }, 2000)
        })

        $(window).on('scroll.vcedi', function () {
            const scrollTop = $('.back-to-top')
            if ($(window).scrollTop() > 1000) {
                scrollTop.fadeIn(1000)
            } else {
                scrollTop.fadeOut(1000)
            }

            const scroll = $(window).scrollTop()
            if (scroll < 445) {
                $('.navbar').removeClass('sticky-active')
            } else {
                $('.navbar').addClass('sticky-active')
            }
        })

        // Preloader + back-to-top initial state (equivalent of $(window).on('load', ...))
        $('#preloader').fadeOut(300)
        $('.back-to-top').fadeOut()

        return () => {
            $(window).off('scroll.vcedi')
        }
    }, [])
}
