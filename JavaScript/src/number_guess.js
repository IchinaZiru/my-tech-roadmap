let num = Math.floor(Math.random() * 10) + 1;

let userNum = prompt("Enter a number:");


for (let i = 0; i < 3; i++) {
    if (num < Number(userNum)) {
        console.log("大きすぎ");
        userNum = prompt("Enter a number:");
    } else if (num > Number(userNum)) {
        console.log("小さすぎ");
        userNum = prompt("Enter a number:");
    } else {
        console.log("正解！");
        break;
    }
}