function fruit(fruit, grams, kg) {
    let kgWanted = grams / 1000;
    let finalPrice = kgWanted * kg;

    console.log(`I need $${finalPrice.toFixed(2)} to buy ${kgWanted.toFixed(2)} kilograms ${fruit}.`)
}