var BCTANGO = {

  isVideoFolded: false,

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


    $('.video-share').on('click', function(e) {
      BCTANGO.togglePopover(e);
    });

    $(document).on('mouseup', function(e) {
      
      if (!$(e.target).hasClass('fa-share-alt')) {
        BCTANGO.setPopoverClose();

      } 
      else {
        BCTANGO.setPopoverClose();

      }

    });

  },

  setPopoverClose: function() {
    var $open = $('.invert');
    var $popover = $open.find('.popover');
    var $iconShare = $open.find('.fa.fa-share-alt');
    var $iconClose = $open.find('.fa.fa-times');

    $open.removeClass('invert');
    $popover.removeClass('animated fadeIn');
    $popover.addClass('animated fadeOut');
    $iconClose.addClass('hidden');
    $iconShare.removeClass('hidden');
  },

  togglePopover: function(e) {
    var $target = $(e.target);
    var $btn = $(e.currentTarget);
    var $popover = $btn.find('.popover');
    var $iconShare = $btn.find('.fa.fa-share-alt');
    var $iconClose = $btn.find('.fa.fa-times');

    if ($popover.hasClass('animated fadeOut') && $target.hasClass('fa-share-alt')) {
      $btn.addClass('invert');
      $popover.removeClass('hidden');
      $popover.removeClass('animated fadeOut');
      $popover.addClass('animated fadeIn');
      $iconClose.removeClass('hidden');
      $iconShare.addClass('hidden');

    } 
    
  },

  foldVideo: function() {
    $(window).on('scroll', function() {
      var $windowTop = $(this).scrollTop();
      var $main = $('.video-main-info').offset().top;

      var shouldFoldVideo = $main < $windowTop;
      if (shouldFoldVideo === BCTANGO.isVideoFolded) {
        return;
      }
      
      BCTANGO.isVideoFolded = shouldFoldVideo;

      var $foldUp = $('.fold-up-mobile');
      var $image = $('.fold-up-mobile .img-scale');
      var $imageLabel = $('.fold-up-mobile .label-container');
      var $headline = $('.fold-up-mobile .headline-container');
      var $lgWrapper = $('.fold-up-desktop');
      
      if (BCTANGO.isVideoFolded) {
        $foldUp.removeClass('slideOutUp');
        $lgWrapper.removeClass('scrolling-fixed slideOutUp');
        $lgWrapper.addClass('scrolling-fixed slideInDown');
        $image.addClass('slideInLeft');
        $imageLabel.addClass('slideInLeft');
        $image.removeClass('slideOutLeft');
        $imageLabel.removeClass('slideOutLeft');
        $headline.addClass('slideInRight');
        $headline.removeClass('slideOutRight');
        $foldUp.addClass('scrolling-fixed');

      } 
      else {
        $foldUp.addClass('slideOutUp');
        $lgWrapper.removeClass('scrolling-fixed slideInDown');
        $image.removeClass('slideInLeft');
        $imageLabel.removeClass('slideInLeft');
        $image.addClass('slideOutLeft');
        $imageLabel.addClass('slideOutLeft');
        $headline.removeClass('slideInRight');
        $headline.addClass('slideOutRight');

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

    } 
    else {
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

};


$(document).ready(function () {
  BCTANGO.init();
});