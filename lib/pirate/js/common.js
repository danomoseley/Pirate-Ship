function reposition(multiplier){
    if (typeof multiplier == 'undefined') {
        multiplier = 1
    }
    var viewportwidth;
    var viewportheight;
    // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
     
    if (typeof window.innerWidth != 'undefined')
    {
        viewportwidth = window.innerWidth,
        viewportheight = window.innerHeight
    }
     
    // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)

    else if (typeof document.documentElement != 'undefined'
        && typeof document.documentElement.clientWidth !=
        'undefined' && document.documentElement.clientWidth != 0)
    {
        viewportwidth = document.documentElement.clientWidth,
        viewportheight = document.documentElement.clientHeight
    }
    else
    {
        viewportwidth = document.getElementsByTagName('body')[0].clientWidth,
        viewportheight = document.getElementsByTagName('body')[0].clientHeight
    }
     
    $("#iconDock").css("margin-top",((viewportheight-$("#iconDock").outerHeight())/2));
    $("body").css("background-size",viewportwidth+"px " + viewportheight + "px");

    if ($("#iconDock").outerHeight() > viewportheight) {
        $(".icons a").css("font-size", window.innerHeight/multiplier)
        reposition(multiplier+0.3);
    }
}
$(document).ready(function() {
    $(window).resize(function() {
        reposition();
    });
});
$(window).load(function() {
    $('#main').fadeIn();
    reposition();
});