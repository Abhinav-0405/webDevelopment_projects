function bmiCalculater(weight, height){
    var bmi = weight/ Math.pow(height,2); 
    return Math.round (bmi);
}

var bmi = bmiCalculater(65, 1.8);
console.log(bmi);