console.log("version:1");
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("i: " + i + " - FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("i: " + i + " - Fizz");
    } else if (i % 5 === 0) {
        console.log( i + " - Buzz");
    }
}
console.log("version2:");
function customFizzBuzz(n, rules) {
    for (let i = 1; i <= n; i++) {
        let ketQua = ""; 
        for (let j = 0; j < rules.length; j++) {
            let luatHienTai = rules[j];
            if (i % luatHienTai.divisor === 0) {
                ketQua += luatHienTai.word;
            }
        } 
        if (ketQua !== "") {
            console.log( i + " - " + ketQua);
        }
    }
}
customFizzBuzz(100, [{ divisor: 3, word: "Fizz" },
                    { divisor: 5, word: "Buzz" },
                    { divisor: 10, word: "Jazz" }
]);