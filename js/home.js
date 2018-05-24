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

// preloader
$(function(){  
    $('html').addClass('reveal');
    $(window).load(function(){
        if ($('.number').hasClass('bottom-offset fixed')) {
            $('.number').removeClass('fixed');
        };
        $('#preloader').delay(300).fadeOut('slow',function(){
            $(this).remove();
        });
    });
});



// smoothscroll
$(function() {
    $('a[href^="#"]').click(function (e) {
        e.preventDefault();
        $(document).off("scroll");
      
        var target = this.hash,
            menu = target;
            $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 60
        }, 500, 'swing');
    });
});

