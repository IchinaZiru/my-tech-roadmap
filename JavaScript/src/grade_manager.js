//点数をランダムに生成
function RandomNumber(score){
    for(let i=0; i<score.length; i++){
        score[i] = Math.floor(Math.random() * 100) + 1;
    }
    return score;
}

//点数の平均を求める
function Average(score){
    let sum = 0;
    for(let i=0; i< score.length; i++){
        sum += score[i];
    }
    return sum / score.length;
}

//点数の最高点を求める
function Max(score){
    let max = score[0];
    for(let i=1; i<score.length; i++){
        if(score[i] > max){
            max = score[i];
        }
    }
    return max;
}

//点数の最低点を求める
function Min(score){
    let min = score[0];
    for(let i=1; i<score.length; i++){
        if(score[i] < min){
            min = score[i];
        }
    }
    return min;
}

//平均値以上の点数のインデックスを抽出
function AboveAverage(score, average){
    let aboveAverage = [];
    for(let i=0; i<score.length; i++){
        if(score[i] >= average){
            aboveAverage.push(i);
        }
    }
    return aboveAverage;
}

//出力
let score = new Array(10);
score = RandomNumber(score);
console.log(`点数\n`);
for(let i = 0; i < score.length; i++){
    console.log(`学生${i+1}: ${score[i]}`);
}
const average = Average(score);

console.log(`平均点: ${average}`);
const aboveAverage = AboveAverage(score, average);
console.log(`平均点以上の学生番号: ${aboveAverage.map(i => i+1).join(', ')}`);