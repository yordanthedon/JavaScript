function solve(product, quantity) {

    let price = 0;

    if (product == 'coffee') {
        price = quantity * 1.50;
    } else if (product == 'water') {
        price = quantity * 1;
    } else if (product == 'coke') {
        price = quantity * 1.40;
    } else if (product == 'snacks') {
        price = quantity * 2.00;
    } 

    return console.log(price.toFixed(2));
}

solve(`snacks`, 2)