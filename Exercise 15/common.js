$(document).ready(function(){
	$('img').mouseover(function(event) {
		$('.info').css('display', 'block');
	});
	$(document).mouseover(function(event) {
		var target = event.target;
		if(target.className != 'info' && target.className != 'chucknorris'){
			$('.info').css('display', 'none');
		}
	});
});