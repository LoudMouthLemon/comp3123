//Q1
function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

console.log(capitalizeWords("she sells seashells by the seashore"));

//Q2
function max(a, b, c) {
    return Math.max(a, b, c);
}

console.log(max(1, 0, 1));
console.log(max(0, -10, -20));
console.log(max(1000, 510, 440));

//Q3
function right(str) {
    if (str.length < 3) return str;
    return str.slice(-3) + str.slice(0, -3);
}

console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));

//Q4
function angle_Type(angle) {
    if (angle > 0 && angle < 90) return "Acute angle";
    else if (angle === 90) return "Right angle";
    else if (angle > 90 && angle < 180) return "Obtuse angle";
    else if (angle === 180) return "Straight angle";
    else return "Invalid angle";
}

console.log(angle_Type(47));
console.log(angle_Type(90));
console.log(angle_Type(145));
console.log(angle_Type(180));
