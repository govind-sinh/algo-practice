function reverseInt(n) {
    const part = parseInt(n/10);
    if (part === 0) {
        return n;
    }
    return (n % 10) * (Math.pow(10, (part*Math.sign(part)).toString().length)) + reverseInt(part);
}
