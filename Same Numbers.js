function sameNum(number) {

    let digit = number % 10;
    let areTheSame = true;
    let sum = 0

    while (number > 0) {

        let lastDig = number % 10;
        sum += lastDig;
        
        if (digit != lastDig){

            areTheSame = false;
        }
        number = Math.floor(number / 10);
    }

    console.log(areTheSame);
    console.log(sum);
}
