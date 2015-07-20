var BCTANGO = {

  init: function () {

    BCTANGO.foldVideo();

    $('.navigation-open').on('click', function() {
      BCTANGO.toggleNavigation();
    });

    $('.navigation-close').on('click', function() {
      BCTANGO.toggleNavigation();
    });

    $('.search-field-open').on('click', function() {
      BCTANGO.openSearchBar();
    });

    $('.search-field-collapse').on('click', function() {
      BCTANGO.closeSearchBar();
    });

    // BCTANGO.bindPopovers();

  },

  foldVideo: function() {
    
    $(window).on('scroll', function() {
      var $windowTop = $(this).scrollTop();
      var $main = $('.video-main-info').position().top;
      var $foldUp = $('.fold-up');
      var $image = $('.fold-up .img-scale');
      var $imageLabel = $('.fold-up .label-container');
      var $headline = $('.fold-up .headline-container');

      if ($main <= $windowTop) {
        $image.addClass('animated slideInLeft');
        $imageLabel.addClass('animated slideInLeft');
        $image.removeClass('animated slideOutLeft');
        $imageLabel.removeClass('animated slideOutLeft');
        $headline.addClass('animated slideInRight');
        $headline.removeClass('animated slideOutRight');
        $foldUp.addClass('scrolling-fixed');

      } 
      else {
        $image.removeClass('animated slideInLeft');
        $imageLabel.removeClass('animated slideInLeft');
        $image.addClass('animated slideOutLeft');
        $imageLabel.addClass('animated slideOutLeft');

        $headline.removeClass('animated slideInRight');
        $headline.addClass('animated slideOutRight');

      }
    });
  },

  toggleNavigation: function() {
    var $wrapper = $('.navigation');
    var $copy = $('.navigation-wrapper');

    if ($wrapper.hasClass('delay-short')) {

      $wrapper.removeClass('delay-short animated slideOutUp');
      $copy.removeClass('animated fadeOut');
      $wrapper.addClass('animated slideInDown');
      $copy.addClass('delay-long animated fadeIn');
      $wrapper.removeClass('wrapper-hidden');

    } else {

      $wrapper.addClass('delay-short');
      $wrapper.removeClass('animated slideInDown');
      $copy.removeClass('delay-long animated fadeIn');
      $copy.addClass('animated fadeOut');
      $wrapper.addClass('animated slideOutUp');
    
    }

  },

  openSearchBar: function() {
    var $collapsible = $('.collapsible');
    var $launchSearch = $('.search-launch');
    var $input = $('.search-input');
    $launchSearch.addClass('hidden');
    $collapsible.slideToggle(150);
    $collapsible.removeClass('hidden');
    $input.focus();
  },

  closeSearchBar: function() {
    var $collapsible = $('.collapsible');
    var $closeSearch = $('.search-field-collapse');
    var $launchSearch = $('.search-launch');
    $collapsible.slideToggle(150, function() {
    $launchSearch.removeClass('hidden');
    });
    $closeSearch.addClass('hidden');
  },

  // bindPopovers: function() {
  //   $('[data-toggle="popover"]').popover({html: true});
  // }

};


$(document).ready(function () {
  BCTANGO.init();
});