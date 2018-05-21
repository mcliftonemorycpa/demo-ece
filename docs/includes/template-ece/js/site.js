(function ($) {
    if (!$) throw "jQuery library is required."

    //Global reference
    const timeoutDelay      = 50;
    const $win              = $(window);
    const $doc              = $(document);
    const $body             = $("body");

    //Cached references
    let $siteHeader         = $("#site-header");
    let $dropdownToggles    = $("#site-header .dropdown-toggle");
    let $tooltip            = $('[data-toggle="tooltip"]');
    let $popover            = $('[data-toggle="popover"]');
    let $mainMenu           = $('#main-menu');
    let $searchToggle       = $('#search-toggle');
    let $searchInput        = $('#search-input');
    let $searchSubmit       = $('#search-submit');

    //Timeout Vars
    let scrollTimeout;
    let resizeTimeout;

    //Add attribute to activate header nav dropdowns on large screens only
    const activateDropdownsFn = function () {
        if (lg == true || xl == true) {
            $dropdownToggles.attr("role", "button").attr("data-toggle", "dropdown").attr("aria-haspopup", "true").attr("aria-expanded", "false");
        } else {
            $dropdownToggles.removeAttr("role").removeAttr("data-toggle").removeAttr("aria-haspopup").removeAttr("aria-expanded");
        }
    }

    //scrollFn
    const scrollFn = function () {
        //Modify header class when scrolling down
        if ( $doc.scrollTop() > $siteHeader.height() ) {
            $siteHeader.addClass("scroll");
        } else {
            $siteHeader.removeClass("scroll");
        }
        return null;
    };

    //resizeFn
    const resizeFn = function () {
        //Push body away from fixed header
        $body.css("padding-top", $siteHeader.height());
        //Detect screen width and activate header nav dropdowns accordingly
        activateDropdownsFn();
    }

    //Setup listeners
    $doc.scroll(function () {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(scrollFn, timeoutDelay);
    });

    $win.resize(function () {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(resizeFn, timeoutDelay * 4);
    });

    //Ready function
    $doc.ready(function () {
        //Ensure cached references are complete
        $siteHeader = $("#site-header");
        $dropdownToggles = $("#site-header .dropdown-toggle");

        //Trigger resize events when page loads
        $win.resize();

        // Init BS tooltips and popovers everywhere
        $tooltip.tooltip();
        $popover.popover();

        // Init scroll spy on target
        $body.scrollspy({
            offset: 100,
            target: '#scrollspy'
        });

        //Toggle site search input box
        $searchToggle.click(function() {
            $searchInput.toggleClass('d-lg-block slide-horiz-l');
            $searchSubmit.toggleClass('d-lg-block slide-horiz-l');
            $mainMenu.toggleClass('d-lg-none slide-horiz-l');
            $searchToggle.toggleClass('icon-cross');
        });
    });

})(jQuery);
