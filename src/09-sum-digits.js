function getSumOfDigits(n) {
  const elem = `${n}`;
  let sum = 0;
  for (let i = 0; i < elem.length; i++) {
    sum += +elem[i];
  }
  if (sum >= 10) {
    let bigSum = 0;
    const bigElem = `${sum}`;
    for (let j = 0; j < bigElem.length; j++) {
      bigSum += +bigElem[j];
    }
    return bigSum;
  }
  return sum;
}

module.exports = getSumOfDigits;
