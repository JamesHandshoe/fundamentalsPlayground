jQuery(document).ready(function(){

	//alert("hey");

	$('#hide').click(function(){
		$('#image').hide();
	});

	$('#show').click(function(){
		$('#image').show();
	});

	$('#fadeOut').click(function(){
		$('#image').fadeOut('slow');
	});

	$('#fadeIn').click(function(){
		$('#image').fadeIn('slow');
	});

	$('#explode').click(function(){
		$('#image').hide("explode", {pieces: 32}, 2000);
	});

	$('#up-down').click(function(){
		$('#image').slideUp().slideDown();
	});

	$('#grow').click(function(){
		$('#image').animate({
			height: '+=20%',
			width: '+=20%'
		});
	});

	$('#shrink').click(function(){
		$('#image').animate({
			height: '-=20%',
			width: '-=20%'
		});
	});

});