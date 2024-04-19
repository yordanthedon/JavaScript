function solve(text, word) {
    let censored = text;
    while (censored.includes(word)) {
        censored = censored.replace(word, '*'.repeat(word.length));
    }
    return censored;
}