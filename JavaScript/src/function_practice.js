//関数の練習セット
//   - 足し算・平均・最大値を求める関数をそれぞれ実装（引数と戻り値に慣れる）。  
//   - 文字列を受け取って「こんにちは, 名前さん！」と返す関数。 


const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 足し算の関数
function add(num){
    let sum = 0;
    for(let i = 0; i < num.length; i++){
        sum += num[i];
    }
    return sum;
}

const sum = add(num);
console.log(`合計:${sum}`);

// 平均の関数
function average(sum, length){
    return sum / length;
}

const avg = average(sum, num.length);
console.log(`平均:${avg}`);

// 最大値を求める関数
function max(num){
    let maxNum = num[0];
    for(let i = 1; i < num.length; i++){
        if(num[i] > maxNum){
            maxNum = num[i];
        }
    }
    return maxNum;
}
const maxNum = max(num);
console.log(`最大値:${maxNum}`);

const readline = require("node:readline");

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});

let name;
rl.question("Enter your name:", (txet) => {
    console.log(greet(txet));
    rl.close();
});

// 文字列を受け取って「こんにちは, 名前さん！」と返す関数
function greet(name) {
    return `こんにちは，${name}さん！`;
}

