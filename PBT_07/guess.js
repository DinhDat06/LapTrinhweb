let answer = Math.floor(Math.random() * 100) + 1;

let count = 0;
let guessed = [];

while (count < 7) {

    let guess = Number(prompt("Nhập số từ 1 đến 100:"));

    if (guess < 1 || guess > 100 || isNaN(guess)) {
        alert("Vui lòng nhập số từ 1 đến 100!");
        continue;
    }

    if (guessed.includes(guess)) {
        alert("Bạn đã đoán số này rồi!");
        continue;
    } 

    guessed.push(guess);
    count++;

    if (guess === answer) {
        alert(`Bạn đoán đúng sau ${count} lần!`);
        break;
    }

    if (guess < answer) {
        alert("Cao hơn");
    } else {
        alert("Thấp hơn");
    }
}

if (count === 7 && guess !== answer) {
    alert(`Bạn thua! Đáp án là ${answer}`);
}