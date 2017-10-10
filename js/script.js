

//toggle courses menu
$(function()
{
	$('#btnBA').on('click', function(){
		$('.section1').toggle('fast');
		console.log("Clicked");
	});

	$('#btnCS').on('click', function(){
		$('.section2').toggle('fast');
		console.log("Clicked");
	});

	$('#btnMIS').on('click', function(){
		$('.section3').toggle('fast');
		console.log("Clicked");
	});

	$( document ).ready(function()
	{
		$(".button-collapse").sideNav();
		console.log("Hi");
	});

});
