var _sections = $($(".section").get().reverse());
var _navLinks = $('#topNav > ul > li > a');
	var sectionIdTonavigationLink = {};
	_sections.each(function() {
	    var id = $(this).find("a").first().attr('id');
	    sectionIdTonavigationLink[id] = $('#topNav > ul > li > a[href=\\#' + id + ']');
	});
function init(){
	bindClickEvents();

	highlightNav();
	$(window).scroll( throttle(highlightNav,100) );
    $(window).scroll( throttle(hideScrollArrow,100) );
}
function bindClickEvents(){
	$("#topNav li").on("click",function(){setNavActive(this);});
}

function setNavActive(data){
	$("#topNav .active").removeClass("active");
	$(data).find("a").addClass("active");
}

// Adapted from: 
// https://stackoverflow.com/questions/32395988/highlight-menu-item-when-scrolling-down-to-section/32396543
function highlightNav(){
    // get the current vertical position of the scroll bar
    var scrollPosition = $(window).scrollTop();
		var hdrHeight = $("body > nav.navbar").outerHeight();
		scrollPosition += hdrHeight;
		var lastSection = false;

    // iterate the sections
    _sections.each(function() {
        var currSection = $(this);

        // get the position of the section
        var sectionTop = currSection.offset().top;
        if ($(document).height() - scrollPosition <
        	 $(window).height() - $(currSection).find(".sectionHeader").outerHeight()){
			lastSection = true;
        }

        // if the user has scrolled over the top of the section  
        if (scrollPosition >= sectionTop || lastSection ) {
            // get the section id
            var id = currSection.find("a").first().attr('id');
            // get the corresponding navigation link
            var navLink = sectionIdTonavigationLink[id];
            // if the link is not active
            if (!navLink.hasClass('active')) {
                // remove .active class from all the links
                $(_navLinks).removeClass("active")
                // add .active class to the current link
                navLink.addClass('active');
            }
            // we have found our section, so we return false to exit the each loop
            return false;
        }
    });
}

function hideScrollArrow(){
    var scrollPosition = $(window).scrollTop();
    var scrollArrow = $(".scrollMoreIcon");
    
    if ((scrollPosition / scrollArrow.offset().top) * 100 > 60){
        scrollArrow.fadeOut("slow");
    }
    else {
        scrollArrow.fadeIn();
    }
} 
// throttle function, enforces a minimum time interval
function throttle(fn, interval) {
    var lastCall, timeoutId;
    return function () {
        var now = new Date().getTime();
        if (lastCall && now < (lastCall + interval) ) {
            // if we are inside the interval we wait
            clearTimeout(timeoutId);
            timeoutId = setTimeout(function () {
                lastCall = now;
                fn.call();
            }, interval - (now - lastCall) );
        } else {
            // otherwise, we directly call the function 
            lastCall = now;
            fn.call();
        }
    };
}

init();