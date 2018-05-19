function convert(){
	var value = $('input').val();
	var selects = $('select');
	var answer;
	if(selects[0].value == 'kg' && selects[1].value == 'lb')
		answer = 2.2 * value + ' lb';
	if(selects[0].value == 'lb' && selects[1].value == 'kg')
		answer = 0.45 * value + ' kg';
	$('#answer').text(answer);
}