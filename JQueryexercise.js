$(document).ready(function(){
	$('body').fadeOut(4000, function(){ 
		$('body').click();
		$('body').fadeIn(2000);
		$('body').show()
	});
	
	$('body').click(function(){ 
		$('body').css('background-color','lightblue'); 
	});
	$('header').slideUp(1000); 
	$('header').slideDown(4000);
	$('header').animate( {   opacity: 0.1,   width: "70%" } , 2000 )
	$('header').fadeOut(10000);
	$('header').fadeIn(20000);
});