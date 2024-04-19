function sumDigits(number) {
    let result = 0;
    while (number > 0) {
        let lastDig = number % 10;
        result += lastDig;
        number = Math.floor(number / 10);
    }
    console.log(result);
}

sumDigits(245678)