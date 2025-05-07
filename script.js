function convertToRoman(num) {
  const obj = {
    0: ['M', 1000],
    1: ['D', 500],
    2: ['C', 100],
    3: ['L', 50],
    4: ['X', 10],
    5: ['V', 5],
    6: ['I', 1]
  };

  const romanMap = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];

  let result = "";
  for (let [symbol, value] of romanMap) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }
  return result;
}

// Uncomment below line to test with input 36
// console.log(convertToRoman(36));

// Do not edit below this line
module.exports = convertToRoman;
