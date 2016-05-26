---
layout: null
---
$(document).ready(function () {
  $('a.blog-button').click(function (e) {
    // if ($('.panel-cover').hasClass('panel-cover--collapsed')) return

    currentWidth = $('.panel-cover').width()
    if (currentWidth < 960) {

      $('.panel-cover').css('max-width', '100%')
      $('.panel-cover').css({'max-width': '100%', 'width': '100%'}, 400, swing = 'swing', function () {})

      $('a#logos').removeClass('open')

    } else {

      $('.panel-cover').css('max-width', currentWidth)
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})

      $('a#logos').addClass('open')

    }
  })

  if (window.location.hash && window.location.hash == '#more') {
    $('.panel-cover').addClass('panel-cover--collapsed')
    $('a#logos').addClass('open')
  }

  if (window.location.pathname !== '{{ site.baseurl }}' && window.location.pathname !== '{{ site.baseurl }}index.html') {
    $('.panel-cover').removeClass('panel-cover--collapsed')

    $('a#logos').removeClass('open')
  }

  $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

  $('.navigation-wrapper .blog-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

})
