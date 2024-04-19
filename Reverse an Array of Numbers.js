function solve (number, input) {
    let elements = input.slice(0, number);

    elements.reverse();

    let reversed = elements.join(' ');

    console.log(reversed);
}
