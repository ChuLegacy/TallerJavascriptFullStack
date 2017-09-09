$(() => {
	$('#modal').modal('show');
	$('#company').on('submit', function (form) {
		form.preventDefault();
		let employes = $('#employes').val();
		let text = `<p> Each employee will receive ${Math.floor(258320000 / employes)}</p>`;
		$('#employes').fadeOut('slow');
		let input = $(this).find('[type=number]');
		input.replaceWith(text);
		$('#second').on('click', button => {
			$('#modalSeconds').modal('show');
			$('#secondExercise').on('submit', form => {
				form.preventDefault();
				let profit = (($('#work').val() * 45000) - 20000);
				$('#work').slideDown('slow');
				$('#work').replaceWith(`<p>The employee's profit on the day is${profit}</p>`);
				$('#third').on('click', button => {
					$('#modalThird').modal();
					$('#modalSeconds').modal('hide');
					$('#modal').modal('hide');
					let centimeters = 2.54;
					let inches = 12;
					let feet = 5.280;
					let result = centimeters * inches * feet;
					// let finish = alert(``);
					$('#result').append(`There are, ${result}, centimeters in one milen`);
				});
			});
		});
	});
});