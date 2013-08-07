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
