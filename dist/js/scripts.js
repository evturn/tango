var BCTANGO = {

  init: function () {
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

  toggleNavigation: function() {
    var $wrapper = $('.navigation');
    if ($wrapper.hasClass('delay-short')) {

      $wrapper.removeClass('delay-short');
      $wrapper.removeClass('animated');
      $wrapper.removeClass('slideOutUp');
      $wrapper.addClass('animated slideInDown');
      $wrapper.removeClass('wrapper-hidden');
    } else {

      $wrapper.addClass('delay-short');
      $wrapper.removeClass('animated');
      $wrapper.removeClass('slideInDown');
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