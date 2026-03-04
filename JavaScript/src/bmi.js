const height = 1.75;
const weight = 70;

const bmi = weight / (height * height);
const roundedBmi = Math.round(bmi * 10) / 10;
console.log(`BMI:${roundedBmi}`);

if(bmi < 18.5){
    console.log("痩せ気味");
}else if(bmi < 25){
    console.log("普通");
}else if(bmi < 30){
    console.log("太り気味");
}else{
    console.log("肥満");
}