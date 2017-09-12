$(() => {
	$('#modalPrev').modal('show');
	let percentage = $('#percentage').on('submit', (form) => {
		form.preventDefault();
		let salary = $('#salary').val();
		let retention = $('#retention').val();
		console.log('Submit desde el form');
		percentage.fadeOut('slow');
		let total = (retention / 100) * salary;
		percentage.parent().append(`${salary - total} Salary total`);
	});
});