function solve(input) {
    let even = 0;
    let odd = 0;
    for (const num of input) {
        if (num % 2 == 0) {
            even += num
        } else {
            odd += num
        }
    }

    let result = even - odd;

    console.log(result);
}