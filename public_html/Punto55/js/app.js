$(() => {
	$('.d-flex').css('height', '100vh');
	$('#convert').on('submit', function (formConvert) {
		formConvert.preventDefault();
		let number = $('#number');
		if ((Math.sign(number.val()) === -1) || Math.sign(number.val() === -0)) {
			number.val(number.val() * -1);
			number.prop('disabled', 'true');
			$('#button').prop('disabled', 'true');
		} else {
			$(this).parent().prepend(`<h1 class="display-4 has-danger">You must enter a number less than zero</h1>`);
		}
		number.on('keydown', () => {
			console.log('etas presionando en el input');
			$('.display-4').animate({ opacity: 0, height: 0 }, 2000);
		});
	});
});