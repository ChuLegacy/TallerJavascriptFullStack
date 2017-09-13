$(() => {
	let year = 15,
		month = 12 * year,
		day = 365 * year,
		hour = 24 * day,
		minute = 60 * hour,
		second = minute * 60;
	$('#object').text(`fifteen years have ${month} Months -- ${day} Days -- ${hour} Hours -- ${minute} Minutes -- ${second} Seconds`);

});