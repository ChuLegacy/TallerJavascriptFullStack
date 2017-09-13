$(() => {
	$('#configuration').on('submit', function (formConfiguration) {
		formConfiguration.preventDefault();
		let salaryBase = $('#salaryBase'),
			retention = $('#retention'),
			auxiliary = $('#auxiliary');
		$('#userConfiguration').modal();
		$(this).parent().fadeOut('slow');
		$('#userConfiguration').on('submit', (formConfiguration) => {
			formConfiguration.preventDefault();
			let userSalary = $('#salaryUser'),
				daysWorked = $('#daysWorked');
			let total;
			if (parseInt(userSalary.val()) <= parseInt((salaryBase.val() * 2))) {
				total = ((parseInt(userSalary.val()) + parseInt(auxiliary.val())) / 30) * parseInt(daysWorked.val());
			} else if (parseInt(userSalary.val()) >= (parseInt(salaryBase.val()) * 4)) {
				let substraction = parseInt(userSalary.val()) - ((parseInt(userSalary.val()) * parseInt(retention.val())) / 100);
				total = (substraction / 30) * parseInt(daysWorked.val());
			} else {
				total = (parseInt(userSalary.val()) / 30) * parseInt(daysWorked.val());
			}
			let $advert = $('<h1>', {
				'html': `Mr. Worker, this is your payment for the month ${total} `,
			});
			$(this).parent().after($advert);
			$('#userConfiguration').modal('hide');
		});
	});
});