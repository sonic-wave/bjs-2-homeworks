"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  
  let d = Math.pow(b,2)-4*a*c;

  if (d === 0) {
    arr.push(-b/(2*a));
  }
  else if (d > 0) {
    arr.push((-b + Math.sqrt(d) )/(2*a));
    arr.push((-b - Math.sqrt(d) )/(2*a));
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent / 100;
  let P = 1/12*percent;
  let S = amount - contribution;

  let sum = S * (P + (P / (Math.pow((1 + P), countMonths) - 1)));
  return sum = Number((sum*countMonths).toFixed(2));
}