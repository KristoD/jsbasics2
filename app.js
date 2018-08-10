function magic_multiply(x, y) {
    if (x.constructor === Array) {
        let result = []
        for(let i = 0; i < x.length; i++) {
            result.push(x[i] * y);
        }
        x = result
    } else if (typeof x == 'number' && typeof y == "string") {
        x = "Error: Can not multiply by String";
    } else if (typeof x == 'string' && typeof y == 'number') {
        let result = x.repeat(y);
        x = result;
    } else {
        result = x * y;
        x = result;
    }
    return x;
}

let test1 = magic_multiply(5, 2);
console.log(test1);
let test2 = magic_multiply(0, 0);
console.log(test2);
let test3 = magic_multiply([1,2,3], 2)
console.log(test3);
let test4 = magic_multiply(7, "three");
console.log(test4);
let test5 = magic_multiply("Brendo", 4);
console.log(test5);