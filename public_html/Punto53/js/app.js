$(() => {
	$('#ruleOfThree').on('submit', (form) => {
		form.preventDefault();
		let first = $('#first').val();
		let second = $('#second').val();
		let third = $('#third').val();
		let result = ((first * second) / third);
		$('#result').html('Rule  of three is so: result = A * B / C <br>' + result);
		$('#modal').modal();
	});
});