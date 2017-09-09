$(() => {
	let rectangle = $('.rectangle');
	$('#width').keyup(function () {
		let width = $(this).val();
		rectangle.animate({ 'width': width });
	});
	$('#height').keyup(function () {
		let height = $(this).val();
		rectangle.animate({ 'height': height });
	});
	$('#perimeter').on('submit', function (calc) {
		calc.preventDefault();
		let perimeter = (($('#width').val() * 2) + ($('#height').val() * 2));
		let area = ($('#width').val() * $('#height').val());
		let perimeterElement = `<span class="alert alert-success">Perimeter: ${perimeter}</span>`;
		let areaElement = `<span class="alert alert-success">Area: ${area}</span>`;
		$(this).fadeOut('slow');
		$('.row').append(perimeterElement);
		$('.row').append(areaElement);
	});
});
