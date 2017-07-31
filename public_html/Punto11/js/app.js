let x = '';
let j = 1
do {
	for (let i = 0; i <= 5; i++) {
		console.log(`${x += '*'}`);
	}
	j++;
	if (j === 1) {
		console.log(':D');
	}
}while(j ===1);
