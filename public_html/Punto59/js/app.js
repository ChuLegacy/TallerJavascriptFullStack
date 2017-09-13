$(() => {
	$('#subtrationDates').on('submit', (form) => {
		form.preventDefault();
		let date1 = new Date($('#date1').val()),
			date2 = new Date($('#date2').val()),
			dateTotal = date2.getTime() - date1.getTime(),
			second = Math.round(dateTotal / 1000),
			minutes = Math.round(second / 60),
			hours = Math.round(minutes / 60),
			days = Math.round(hours / 24),
			months = days / 30,
			years = months / 12;
		$('#total').append(`there are years ${years.toFixed(2)}, ${months.toFixed(2)} months ${days.toFixed(2)} days of difference in your two dates`);
		$('#date').modal('show');
	});
});