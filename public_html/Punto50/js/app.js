$(() => {
	$('#modal').modal('show');
	$('#company').on('submit', function (form) {
		form.preventDefault();
		let employes = $('#employes').val();
		let text = `<p> Each employee will receive ${Math.floor(258320000 / employes)}</p>`;
		$('#employes').fadeOut('slow');
		let input = $(this).find('[type=number]');
		input.replaceWith(text);

		let buttonNext = $(this).find('[type=submit]').clone();
		console.log(buttonNext);
		$(this).find('.input-group').eq(1).before(buttonNext);
	});
	setTimeout(() => {

	},2000);
});