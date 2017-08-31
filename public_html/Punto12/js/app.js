let x = '     *',
        y = '*',
        j = 1;
while (j === 1) {
  for (let i = 0; i < 5; i++) {
    if (x === '     *') {
      console.log(x);
    }
    console.log(x = x.slice(1) + y);
  }
  j++;
}
