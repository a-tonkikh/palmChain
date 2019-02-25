$.fn.isOnScreen = function(){
    var win = $(window);
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};
$(document).ready(function(){
    $(window).scroll(function(){
        if ($('#topanchor').isOnScreen()) {
          $("#menutop").addClass("main-nav__link--active");
          $("#menuissue").removeClass("main-nav__link--active");
          $("#menuvideo").removeClass("main-nav__link--active");
          $("#menuabout").removeClass("main-nav__link--active");
        } else {
          $("#menutop").removeClass("main-nav__link--active");
        }
    });
});

$(document).ready(function(){
    $(window).scroll(function(){
        if ($('#issueanchor').isOnScreen()) {
          $("#menuissue").addClass("main-nav__link--active");
          $("#menuvideo").removeClass("main-nav__link--active");
          $("#menutop").removeClass("main-nav__link--active");
          $("#menuabout").removeClass("main-nav__link--active");
        } else {
          $("#menuissue").removeClass("main-nav__link--active");
        }
    });
});

$(document).ready(function(){
    $(window).scroll(function(){
        if ($('#aboutanchor').isOnScreen()) {
          $("#menuabout").addClass("main-nav__link--active");
          $("#menuissue").removeClass("main-nav__link--active");
          $("#menuvideo").removeClass("main-nav__link--active");
          $("#menutop").removeClass("main-nav__link--active");
        } else {
          $("#menuabout").removeClass("main-nav__link--active");
        }
    });
});

$(document).ready(function(){
    $(window).scroll(function(){
        if ($('#videoanchor').isOnScreen()) {
          $("#menuvideo").addClass("main-nav__link--active");
          $("#menuissue").removeClass("main-nav__link--active");
          $("#menutop").removeClass("main-nav__link--active");
          $("#menuabout").removeClass("main-nav__link--active");
        } else {
          $("#menuvideo").removeClass("main-nav__link--active");
        }
    });
});
