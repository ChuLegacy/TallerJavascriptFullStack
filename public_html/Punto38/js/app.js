$(() => {
	let message = "Hi this It's my JavaScript script # 38 stored in a variable using jQuery. ";
	$('#modal')
	.modal()
	.find('p').text(message);
});