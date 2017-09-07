let x = '*';
let text = $('#text');
let container = $('#container');
for (let j = 0; j <= 7; j++) {
	x = x + '*';
}
for (let i = 0; i <= 13; i++) {
	if (x.length === 9) {
		switch (i) {
			case 0:
				container.append(`&nbsp;&nbsp;&nbsp;&nbsp;${x.slice(2, 3)}&nbsp;&nbsp;&nbsp;&nbsp;<br>`);
				break;
			case 1:
				container.append(`&nbsp;&nbsp;&nbsp;${x.slice(2, 5)}<br>`);
				break;
			case 2:
				container.append(`&nbsp;&nbsp;${x.slice(2, 7)}<br>`);
				break;
			case 3:
				container.append(`&nbsp;${x.slice(2, 9)}<br>`);
				break;
			case 4:
				container.append(`&nbsp;&nbsp;&nbsp;${x.slice(2, 5)}<br>`);
				break;
			case 5:
				container.append(`&nbsp;&nbsp;&nbsp;${x.slice(2, 5)}<br>`);
				break;
			case 6:
				container.append(`&nbsp;&nbsp;${x.slice(2, 7)}<br>`);
				break;
			case 7:
				container.append(`&nbsp;${x.slice(2, 9)}<br>`);
				break;
			case 8:
				container.append(`${x}<br>`);
				break;
			case 9:
				container.append(`&nbsp;${x.slice(2, 9)}<br>`);
				break;
			case 10:
				container.append(`&nbsp;&nbsp;${x.slice(2, 7)}<br>`);
				break;
			case 11:
				container.append(`&nbsp;&nbsp;&nbsp;${x.slice(2, 5)}<br>`);
				break;
			case 12:
				container.append(`&nbsp;&nbsp;&nbsp;&nbsp;${x.slice(2, 3)}&nbsp;&nbsp;&nbsp;&nbsp;<br>`);
				break;
			default:
				break;
		}
	}
}
$('#modal').modal('show');
