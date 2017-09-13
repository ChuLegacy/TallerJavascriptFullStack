$(() => {
	let newElement = $(`<p >&#x1F525;</p>`);
	let value = $('#age');
	value.append(newElement.css({
		'display': 'none',
		'position': 'absolute',
		'top': '0',
		'left': '0',
	}));
	value.on('submit', form => {
		form.preventDefault();
		let valueAge = $('#ageValue').val();
		let coordenadas = value.find('[type="submit"]').offset();
		newElement
			.css('display', 'block')
			.animate({
				top: `${(coordenadas.top) + 45}`,
				left: `${(coordenadas.left) + 17}`
			}, 2000, () => {
				let button = $('[type="submit"]');
				$('#ageValue').attr('hidden', 'true');
				button.attr('hidden', 'true');
				newElement.css('display', 'none');
				if (valueAge >= 18) {
					button.after(`<button class="btn btn-success">you've gone into the blowout.!!</button>`);
				} else {
					button.after(`<button class="btn btn-danger">You couldn't get in.!! </button>`);
				}
			});
	});
});