function soma(a, b, c) {
    if (c !== undefined) {
        return a + b + c;
    } else {
        return a + b;
    }
}

console.log(soma(2, 4, 5));
console.log(soma(2, 3, 4)); 