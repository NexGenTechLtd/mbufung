$(function(){
	var current_li;
	$("#portfolio img").click(function() {

		var src = $(this).attr("src");
		current_li = $(this).parent();

		//get the title attribute
		var altCaption = $(this).attr('title');
		$('#caption').html(altCaption);

		$("#main").attr("src", src);
		$("#frame").fadeIn();
		$("#overlay").fadeIn();
		$("#caption").fadeIn();

	});

	$("#overlay").click(function() {
		$(this).fadeOut();
		$("#frame").fadeOut();
	});

	$('#right').click(function(){
		if (current_li.is(':last-child')) {
			var next_li = $('#portfolio li').first();
			
		} else {
			var next_li = current_li.next();
			
		}
		
		var next_src = next_li.children('img').attr('src');
		$('#main').attr('src', next_src);
		current_li = next_li;
		/*get the caption from the titlet*/
		var nextcap = next_li.children('img').attr('title');
		$('#caption').html(nextcap);
		

	});
	
	$('#left').click(function(){
		if (current_li.is(':first-child')) {
			var prev_li = $('#portfolio li').last();
		} else{
			var prev_li = current_li.prev();
		}
		
		var prev_src = prev_li.children('img').attr('src');
		$('#main').attr('src', prev_src);
		current_li = prev_li;
		//display the caption using alt
		/*get the caption from the alt*/
		var nextcap = prev_li.children('img').attr('title');
		$('#caption').html(nextcap);
	});

	$('#right, #left').mouseover(function(){
		$(this).css("opacity", "0.75");
	});
	$('#right, #left').mouseleave(function(){
		$(this).css("opacity", "0.5");
	});

	$('#caption').click(function(){

		if(altCaption.is(':first-child')) {
			var prev_alt = $('#portfolio li').last();
		} else {
			var prev_alt = altCaption.prev();
		}
		var prev_altt = prev_alt.children('img').attr('alt');
		$('#caption').html(prev_altt);
		altCaption = prev_alt;
	});

});