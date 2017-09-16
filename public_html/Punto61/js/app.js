$(() => {
	$('.trash').on('click', () => {
		delete localStorage.arrangement;
	});
	$('#fill').on('click', function (btn) {
		let button = $(this);
		button.addClass('rotate');
		button.animate({
			transform: 'rotateX(360deg)'
		}, 2000, () => {
			$('.btnFill').animate({
				opacity: '1'
			}, 1000);
			button.attr('type', 'text');
			button.val('');
			button.attr('placeholder', 'Write the size from arrangement');
		});
	});
	$('.btnFill').on('click', () => {
		let arrangement = [];
		for (let i = 0; i < $('#fill').val(); i++) {
			arrangement[i] = (Math.random() * 100).toFixed(0);
		}
		localStorage.setItem('arrangement', JSON.stringify(arrangement));
		$('#fillText').text(arrangement.toString());
		$('#fillModal').modal('show');
	});
	$('#fillModal').on('hide.bs.modal', () => {
		location.reload();
	});
	$('#pair').on('click', function () {
		if (!localStorage.arrangement) {
			$(this).val('Oh no arrangement not exist');
			setTimeout(() => {
				location.reload();
			}, 2000);
		} else {
			arrangement = JSON.parse(localStorage.getItem('arrangement'));
			localStorage.setItem('pair', JSON.stringify(arrangement.filter(number => number % 2 === 0)));
			$('#fillText').text(JSON.parse(localStorage.getItem('pair')));
			$('#fillModal').modal('show');
		}
	});
	$('#prime').on('click', function () {
		if (!localStorage.arrangement) {
			$(this).val('Oh no arrangement not exist');
			setTimeout(() => {
				location.reload();
			}, 2000);
		} else {
			arrangement = JSON.parse(localStorage.getItem('arrangement'));
			localStorage.setItem('prime', JSON.stringify(arrangement.filter((number, index, array) => {
				let cont = 0;
				for (let i = 1; i <= number; i++) {
					if (number % i === 0) {
						cont++;
					}
				}
				if (cont === 2) {
					return number;
				}
			})));
			$('#fillText').text(JSON.parse(localStorage.getItem('prime')));
			$('#fillModal').modal('show');
		}
	});
	$('#sumPair').on('click', function () {
		if ((!localStorage.arrangement) || (!localStorage.pair)) {
			$(this).val('Oh no arrangement not exist');
			setTimeout(() => {
				location.reload();
			}, 2000);
		} else {
			pair = JSON.parse(localStorage.getItem('pair'));
			localStorage.setItem('sumPair', JSON.stringify(pair.reduce((anterior, actual, array) => {
				return parseInt(anterior) + parseInt(actual);
			})));
			$('#fillText').text(JSON.parse(localStorage.getItem('sumPair')));
			$('#fillModal').modal('show');
		}
	});
	$('#sumPrime').on('click', function () {
		if ((!localStorage.arrangement) || (!localStorage.prime)) {
			$(this).val('Oh no arrangement not exist');
			setTimeout(() => {
				location.reload();
			}, 2000);
		} else {
			prime = JSON.parse(localStorage.getItem('prime'));
			localStorage.setItem('sumPrime', JSON.stringify(prime.reduce((anterior, actual, array) => {
				return parseInt(anterior) + parseInt(actual);
			})));
			$('#fillText').text(JSON.parse(localStorage.getItem('sumPrime')));
			$('#fillModal').modal('show');
		}
	});
	$('#averagePair').on('click', function () {
		if ((!localStorage.arrangement) || (!localStorage.pair) || (!localStorage.sumPair)) {
			$(this).val("Oh no arrangement not exist or you haven't added the even numbers");
			setTimeout(() => {
				location.reload();
			}, 2000);
		} else {
			localStorage.setItem('averagePair', JSON.stringify(JSON.parse(localStorage.sumPair) / (JSON.parse(localStorage.pair).length - 1)));
			$('#fillText').text(JSON.parse(localStorage.getItem('averagePair')).toFixed(2));
			$('#fillModal').modal('show');
		}
	});
	$('#averagePrime').on('click', function () {
		if ((!localStorage.arrangement) || (!localStorage.prime) || (!localStorage.sumPrime)) {
			$(this).val("Oh no arrangement not exist or you haven't added the even numbers");
			setTimeout(() => {
				location.reload();
			}, 2000);
		} else {
			localStorage.setItem('averagePrime', JSON.stringify(JSON.parse(localStorage.sumPrime) / (JSON.parse(localStorage.prime).length - 1)));
			$('#fillText').text(JSON.parse(localStorage.getItem('averagePrime')).toFixed(2));
			$('#fillModal').modal('show');
		}
	});
});