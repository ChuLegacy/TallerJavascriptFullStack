$(() => {
	$('#modal').modal('show');
	$('#calculate').on('submit', (form) => {
		form.preventDefault();
		let hours = $('#hours').val(),
			days = hours / 24,
			week = days / 7;
		$('#total').text(`In the hours entered there are ${week.toFixed(2)} weeks and ${days} days`);

		$('#modal').modal('hide');
	});
});