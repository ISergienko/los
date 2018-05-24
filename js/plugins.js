// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

//link external
$('a[rel="external"]').attr('target', '_blank');

// sticky header    
$(function(){
  $(window).scroll(function(){
    var winTop = $(window).scrollTop();
    var winBottom = winTop + $(window).height() > ($(document).height() - 30);

    if (winBottom){
      $("header").addClass("bottom-header").removeClass("stickyicky");
    }else if (winTop >= 30){
      $("header").addClass("stickyicky").removeClass("bottom-header");
    }else{
      $("header").removeClass("stickyicky");
    }
  });
});

// mobile nav push
$(function(){
    $('.mobile-menu, .mobile-overlay, header nav a').click(function(){
        $('html').toggleClass('menu-on');
    });
});

