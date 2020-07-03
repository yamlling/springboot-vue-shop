const math = require('mathjs')
//减法
export function subtraction(subtrahend, minuend) {
    return math.format(
        math
            .chain(math.bignumber(subtrahend))
            .subtract(math.bignumber(minuend))
            .done()
    )
}

//加法
export function addition(subtrahend, minuend) {
    return math.format(math.chain(math.bignumber(subtrahend)).add(math.bignumber(minuend)).done());
}

//乘法
export function multiplication(subtrahend, minuend) {
    return math.format(math.chain(math.bignumber(subtrahend)).multiply(math.bignumber(minuend)).done());
}

//除法
export function division(subtrahend, minuend) {
    return math.format(math.chain(math.bignumber(subtrahend)).divide(math.bignumber(minuend)).done());
}