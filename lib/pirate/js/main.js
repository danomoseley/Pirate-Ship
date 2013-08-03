function reposition(){
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
}

function isiPad(){
	return (navigator.platform.indexOf("iPad") != -1);
}
	
$(document).ready(function() {
	if (typeof(config.trakt) != 'undefined') {
		$('body').append('<a class="simple" target="_blank" style="position:absolute;bottom:5px;right:5px;" href="http://trakt.tv/user/'+config.trakt.username+'"><img class="shadow" alt="trakt.tv" src="http://trakt.tv/user/'+config.trakt.username+'/widget/watched-clearlogo.jpg" /></a>');
		$('body').append('<a class="fancy" rel="gallery" target="_blank" style="position:absolute;bottom:5px;right:5px;" href="http://trakt.tv/user/'+config.trakt.username+'"><img class="shadow" alt="trakt.tv" src="http://trakt.tv/user/'+config.trakt.username+'/widget/watched-clearlogo.jpg" /></a>');
	}

	for (var i in links) {
		var link = links[i];
		link.url = 'http://' + config.user + ':' + config.password + '@' + link.url;
		$('#iconDock .icons').append($('<a class="simple appLink" target="_blank" href="'+link.url+'"><img height="'+config.iconDockHeight+'" src="'+link.img+'"/></a>'));
		$('#iconDock .icons').append($('<a class="fancy appLink" rel="gallery" target="_blank" href="'+link.url+'"><img height="'+config.iconDockHeight+'" src="'+link.img+'"/></a>'));
	}
	
	if(localStorage["fancy"] == "true"){
		$("body").addClass("allFancy");
		$('#beFancy').attr('checked', true);
	} else {
		$("body").removeClass("allFancy");
		$('#beFancy').attr('checked', false);
	}			
	
	if (isiPad()) {
		$('.fancy').fancybox({
			'width':'100%',
			'height':'100%',
			'type':'inline',
			'autoScale':'false'
		});
	} else {
		$('.fancy').fancybox({
			'width':'100%',
			'height':'100%',
			'type':'iframe',
			'autoScale':'false'
		});
	}
	$(window).resize(function() {
		reposition();
	});	

	$("#beFancy").change(function(){
		if($('#beFancy').is(':checked')){
			$("body").addClass("allFancy");
			localStorage["fancy"] = true;
		}else{
			$("body").removeClass("allFancy");
			localStorage["fancy"] = false;
		}
	});
});

$(window).load(function() {
	$('#main').fadeIn();
	reposition();
});
