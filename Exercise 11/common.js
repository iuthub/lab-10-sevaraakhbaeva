$(document).ready(function(){
	$('#add').click(function(event) {
		var paragraph = $('#paragraph').val();
		// console.log(paragraph);
		$('#essay_body').append($('<p></p>').text(paragraph));
	});
});