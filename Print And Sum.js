function printSum(startNum, endNum) {
    let printNums = '';
    let result = 0;

    for (let i = startNum; i <= endNum; i++) {
        printNums += i + ' ';
        result += i;
    }
    console.log(printNums.trim())
    console.log(`Sum: ${result}`);
}