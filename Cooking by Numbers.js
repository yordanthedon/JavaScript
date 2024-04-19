function first(number, first, second, third, forth, fifth) {

    number = operant(number, first);
    console.log(number);
    number = operant(number, second);
    console.log(number);
    number = operant(number, third);
    console.log(number);
    number = operant(number, forth);
    console.log(number);
    number = operant(number, fifth);
    console.log(number);

    function operant(number, operant){
        switch (operant){
            case 'chop':
                number /= 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number += 1;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                number *= 0.8;
                break;
        }
        return number;
    }
}


first('32', 'chop', 'chop', 'chop', 'chop', 'chop');