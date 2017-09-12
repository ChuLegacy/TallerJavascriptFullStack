$(() => {
	$('#hyputenuse').on('submit', function (form) {
		form.preventDefault();
		let sideA = $('#sideA');
		let sideB = $('#sideB');
		localStorage.setItem('hypotenuse', Math.hypot(sideA.val(), sideB.val()).toFixed(2));
		$(this).find('[type="submit"]')
			.prop('value', `The Hypotenuse of the triangle is ${Math.hypot(sideA.val(), sideB.val()).toFixed(2)}`);

	});
});