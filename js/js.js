
$(function(){
	
	"use strict";

	$('#info').click( function() {
		$('#info__box').toggleClass('open');  
	});

	$('.pr__bar').each(function(){
		let width = $(this).data('skill'); //В переменую записали необходимую ширину
		$(this).css('width', width + "%");
	});

	$('#menu__btn').click( function() {
		$('#nav__main').toggleClass('open');  
	});

});

