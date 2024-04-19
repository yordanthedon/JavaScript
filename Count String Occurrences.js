function solve(text, word) {
    let words = text.split(' ');
    let count = 0;
    for (let w of words) {
        if (w === word) {
            count += 1;
        }
    }

    return count;
}
