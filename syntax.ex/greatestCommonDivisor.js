function greatestCommonDivisor(a, b) {
    let GCD = a % b;
    while(GCD !== 0) {
        a = b;
        b = GCD;
        GCD = a % b;
    }
    console.log(b);
}
greatestCommonDivisor(2154, 458);