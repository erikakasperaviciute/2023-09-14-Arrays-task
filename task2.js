// 3. Tęsiant darbą su ankstesniu masyvu atlikti šias užduotis naudojant filter metodą. Kiekvienai užduočiai sukurti naują kintamąjį, jame išsaugoti reikšmę, kurią grąžina filter metodas, ir šį kintamąjį išvesti į konsolę:
let array = [
  "start",
  2,
  3,
  5,
  11,
  155,
  888,
  "15x",
  6789,
  -5564,
  "obuolys",
  -51,
  55,
  0,
  33,
  789,
  6543,
  1,
  "trylika",
  444,
  321,
  654,
  -1,
  987,
  -333,
  -321,
  "end",
];

console.log(array);

// 3.1. Gauti tik teigiamus skaičius.

let positiveNumbers = array.filter(function (num) {
  return typeof num === "number" && num > 0;
});
console.log(positiveNumbers);

// 3.2. Gauti tik neigiamus skaičius.
let negativeNumbers = array.filter(function (num) {
  return typeof num === "number" && num < 0;
});
console.log(negativeNumbers);

// 3.3. Gauti tik skaičius, kurie dalinasi iš 2.
let evenNumbers = array.filter(function (num) {
  return typeof num === "number" && num % 2 === 0;
});
console.log(evenNumbers);

// 3.4. Gauti tik skaičius, kurie dalinasi iš 3.
let divideBy3 = array.filter(function (num) {
  return typeof num === "number" && num % 3 === 0;
});
console.log(divideBy3);

// 3.5. Gauti tik skaičius, kurie dalinasi iš 5.
let divideBy5 = array.filter(function (num) {
  return typeof num === "number" && num % 5 === 0;
});
console.log(divideBy5);

// 3.6. Gauti tik skaičius, kurie dalinasi iš 11.
let divideBy11 = array.filter(function (num) {
  return typeof num === "number" && num % 11 === 0;
});
console.log(divideBy11);

// 3.7. Gauti tik skaičius, kurie dalinasi iš 31.
let divideBy31 = array.filter(function (num) {
  return typeof num === "number" && num % 31 === 0;
});
console.log(divideBy31);

// 3.8. Gauti tik skaičius, kurie dalinasi iš 2 ir iš 3.
let divideBy2And3 = array.filter(function (num) {
  return typeof num === "number" && num % 2 === 0 && num % 3 === 0;
});
console.log(divideBy2And3);

// 3.9. Gauti tik skaičius, kurie dalinasi iš 3 ir iš 7.
let divideBy3And7 = array.filter(function (num) {
  return typeof num === "number" && num % 3 === 0 && num % 7 === 0;
});
console.log(divideBy3And7);

// 3.10. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 9.
let divideBy5And9 = array.filter(function (num) {
  return typeof num === "number" && num % 5 === 0 && num % 9 === 0;
});
console.log(divideBy5And9);

// 3.11. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 11.
let divideBy5And11 = array.filter(function (num) {
  return typeof num === "number" && num % 5 === 0 && num % 11 === 0;
});
console.log(divideBy5And11);

// 3.12. Gauti tik skaičius, kurie dalinasi iš 2, 8 ir 12.
let divideBy2And8And12 = array.filter(function (num) {
  return (
    typeof num === "number" && num % 2 === 0 && num % 8 === 0 && num % 12 === 0
  );
});
console.log(divideBy2And8And12);

// 3.13. Gauti tik skaičius, kurie dalinasi iš 2 arba iš 3.
let divideBy2Or3 = array.filter(function (num) {
  return (typeof num === "number" && num % 2 === 0) || num % 3 === 0;
});
console.log(divideBy2Or3);

// 3.14. Gauti tik skaičius, kurie dalinasi iš 3 arba iš 5.
let divideBy3Or5 = array.filter(function (num) {
  return (typeof num === "number" && num % 3 === 0) || num % 5 === 0;
});
console.log(divideBy3Or5);

// 3.15. Gauti tik skaičius, kurie dalinasi iš 5 arba iš 6.
let divideBy5Or6 = array.filter(function (num) {
  return (typeof num === "number" && num % 5 === 0) || num % 6 === 0;
});
console.log(divideBy5Or6);

// 3.16. Gauti tik skaičius, kurie dalinasi iš 7 arba iš 8.
let divideBy7Or8 = array.filter(function (num) {
  return (typeof num === "number" && num % 7 === 0) || num % 8 === 0;
});
console.log(divideBy7Or8);

// 3.17. Gauti tik skaičius, kurie dalinasi iš 9 arba iš 13.
let divideBy9Or13 = array.filter(function (num) {
  return (typeof num === "number" && num % 9 === 0) || num % 13 === 0;
});
console.log(divideBy9Or13);

// 3.18. Gauti tik skaičius, kurie dalinasi iš 2, 3 arba iš 5.
let divideBy2Or3Or5 = array.filter(function (num) {
  return (
    (typeof num === "number" && num % 2 === 0) || num % 3 === 0 || num % 5 === 0
  );
});
console.log(divideBy2Or3Or5);
// 3.19. Gauti tik skaičius, kurie dalinasi iš 5, 7 arba iš 9.
let divideBy5Or7Or9 = array.filter(function (num) {
  return (
    (typeof num === "number" && num % 5 === 0) || num % 7 === 0 || num % 9 === 0
  );
});
console.log(divideBy5Or7Or9);

// 3.20. Gauti tik skaičius, kurie dalinasi iš 7, 8 arba iš 11.
let divideBy7Or8Or11 = array.filter(function (num) {
  return (
    (typeof num === "number" && num % 7 === 0) ||
    num % 8 === 0 ||
    num % 11 === 0
  );
});
console.log(divideBy7Or8Or11);

// 3.21. Gauti tik skaičius, kurie dalinasi iš 9, 12 arba iš 13.
let divideBy9Or12Or13 = array.filter(function (num) {
  return (
    (typeof num === "number" && num % 9 === 0) ||
    num % 12 === 0 ||
    num % 13 === 0
  );
});
console.log(divideBy9Or12Or13);

// 3.22. Gauti tik skaičius, kurie yra didesni už 100.
let moreThan100Numbers = array.filter(function (num) {
  return typeof num === "number" && num > 100;
});
console.log(moreThan100Numbers);

// 3.23. Gauti tik skaičius, kurie yra didesni už 555.
let moreThan555Numbers = array.filter(function (num) {
  return typeof num === "number" && num > 555;
});
console.log(moreThan555Numbers);

// 3.24. Gauti tik skaičius, kurie yra didesni arba lygūs 888.
let moreThan888Numbers = array.filter(function (num) {
  return typeof num === "number" && num >= 888;
});
console.log(moreThan888Numbers);

// 3.25. Gauti tik skaičius, kurie yra didesni arba lygūs 6789.
let moreThan6789Numbers = array.filter(function (num) {
  return typeof num === "number" && num >= 6789;
});
console.log(moreThan6789Numbers);

// 3.26. Gauti tik skaičius, kurie yra mažesni už 50.
let lessThan50Numbers = array.filter(function (num) {
  return typeof num === "number" && num < 50;
});
console.log(lessThan50Numbers);

// 3.27. Gauti tik skaičius, kurie yra mažesni už 1000.
let lessThan1000Numbers = array.filter(function (num) {
  return typeof num === "number" && num < 1000;
});
console.log(lessThan1000Numbers);

// 3.28. Gauti tik skaičius, kurie yra mažesni arba lygūs -1.
let lessThanMinus1Numbers = array.filter(function (num) {
  return typeof num === "number" && num <= -1;
});
console.log(lessThanMinus1Numbers);

// 3.29. Gauti tik skaičius, kurie yra mažesni arba lygūs -5564.
let lessThanMinus5564Numbers = array.filter(function (num) {
  return typeof num === "number" && num <= -5564;
});
console.log(lessThanMinus5564Numbers);

// 3.30. Gauti tik skaičius, kurie yra mažesni už 1000 ir didesni už 500.
let lessThan1000MoreThan500Numbers = array.filter(function (num) {
  return typeof num === "number" && num < 1000 && num > 500;
});
console.log(lessThan1000MoreThan500Numbers);

// 3.31. Gauti tik skaičius, kurie yra mažesni už 100 ir didesni už 0.
let lessThan100MoreThan0Numbers = array.filter(function (num) {
  return typeof num === "number" && num < 100 && num > 0;
});
console.log(lessThan100MoreThan0Numbers);

// 3.32. Gauti tik skaičius, kurie yra mažesni už 0 ir didesni už -50.
let lessThan0MoreThanMinus50Numbers = array.filter(function (num) {
  return typeof num === "number" && num < 0 && num > -50;
});
console.log(lessThan0MoreThanMinus50Numbers);

// 3.33. Gauti tik skaičius, kurie yra mažesni arba lygūs 0 ir didesni už -100.
let lessThan0MoreThanMinus100Numbers = array.filter(function (num) {
  return typeof num === "number" && num <= 0 && num > -100;
});
console.log(lessThan0MoreThanMinus100Numbers);

// 3.34. Gauti tik skaičius, kurie yra didesni arba lygūs 0 ir mažesni už 55.
let moreThan0LessThan55Numbers = array.filter(function (num) {
  return typeof num === "number" && num >= 0 && num < 55;
});
console.log(moreThan0LessThan55Numbers);

// 3.35. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir mažesni arba lygūs 654.
let moreThan444LessThan654Numbers = array.filter(function (num) {
  return typeof num === "number" && num >= 444 && num <= 654;
});
console.log(moreThan444LessThan654Numbers);

// 3.36. Gauti tik teigiamus skaičius, kurie dalinasi iš 2.
let positiveDivideBy2 = array.filter(function (num) {
  return typeof num === "number" && num > 0 && num % 2 === 0;
});
console.log(positiveDivideBy2);

// 3.37. Gauti tik teigiamus skaičius, kurie dalinasi iš 3.
let positiveDivideBy3 = array.filter(function (num) {
  return typeof num === "number" && num > 0 && num % 3 === 0;
});
console.log(positiveDivideBy3);

// 3.38. Gauti tik neigiamus skaičius, kurie dalinasi iš 4.
let negativeDivideBy4 = array.filter(function (num) {
  return typeof num === "number" && num < 0 && num % 4 === 0;
});
console.log(negativeDivideBy4);

// 3.39. Gauti tik neigiamus skaičius, kurie dalinasi iš 111.
let negativeDivideBy111 = array.filter(function (num) {
  return typeof num === "number" && num < 0 && num % 111 === 0;
});
console.log(negativeDivideBy111);

// 3.40. Gauti tik skaičius, kurie yra didesni už 500 ir kurie dalinasi iš 2.
let moreThan500DivideBy2 = array.filter(function (num) {
  return typeof num === "number" && num > 500 && num % 2 === 0;
});
console.log(moreThan500DivideBy2);

// 3.41. Gauti tik skaičius, kurie yra didesni už 1000 ir kurie dalinasi iš 3.
let moreThan1000DivideBy3 = array.filter(function (num) {
  return typeof num === "number" && num > 1000 && num % 3 === 0;
});
console.log(moreThan1000DivideBy3);

// 3.42. Gauti tik skaičius, kurie yra mažesni už 1000 ir kurie dalinasi iš 9.
let lessThan1000DivideBy9 = array.filter(function (num) {
  return typeof num === "number" && num < 1000 && num % 9 === 0;
});
console.log(lessThan1000DivideBy9);

// 3.43. Gauti tik skaičius, kurie yra mažesni už 500 ir kurie dalinasi iš 2.
let lessThan500DivideBy2 = array.filter(function (num) {
  return typeof num === "number" && num < 500 && num % 2 === 0;
});
console.log(lessThan500DivideBy2);

// 3.44. Gauti tik skaičius, kurie yra didesni arba lygūs 33 ir kurie dalinasi iš 3.
let moreThan33DivideBy3 = array.filter(function (num) {
  return typeof num === "number" && num >= 33 && num % 3 === 0;
});
console.log(moreThan33DivideBy3);

// 3.45. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir kurie dalinasi iš 12.
let moreThan444DivideBy12 = array.filter(function (num) {
  return typeof num === "number" && num >= 444 && num % 12 === 0;
});
console.log(moreThan444DivideBy12);

// 3.46. Gauti tik skaičius, kurie yra mažesni arba lygūs 155 ir kurie dalinasi iš 5.
let lessThan155DivideBy5 = array.filter(function (num) {
  return typeof num === "number" && num <= 155 && num % 5 === 0;
});
console.log(lessThan155DivideBy5);

// 3.47. Gauti tik skaičius, kurie yra mažesni arba lygūs -333 ir kurie dalinasi iš 9.
let lessThanMinus333DivideBy9 = array.filter(function (num) {
  return typeof num === "number" && num <= -333 && num % 9 === 0;
});
console.log(lessThanMinus333DivideBy9);

// 3.48. Gauti tik skaičius, kurie yra didesni už 100, mažesni už 500 ir kurie dalinasi iš 5.
let moreThan100LessThan500DivideBy5 = array.filter(function (num) {
  return typeof num === "number" && num > 100 && num < 500 && num % 5 === 0;
});
console.log(moreThan100LessThan500DivideBy5);

// 3.49. Gauti tik skaičius, kurie yra didesni arba lygūs 888, mažesni už 1000 ir kurie dalinasi iš 2.
let moreThan888LessThan1000DivideBy2 = array.filter(function (num) {
  return typeof num === "number" && num >= 888 && num < 1000 && num % 2 === 0;
});
console.log(moreThan888LessThan1000DivideBy2);

// 3.50. Gauti tik skaičius, kurie yra mažesni arba lygūs 888, didesni arba lygūs -333, dalinasi iš 3 ir nėra nulis.
let lessThan888MoreThanMinus333DivideBy3 = array.filter(function (num) {
  return (
    typeof num === "number" &&
    num <= 888 &&
    num >= -333 &&
    num % 3 === 0 &&
    num !== 0
  );
});
console.log(lessThan888MoreThanMinus333DivideBy3);

// 3.51. Gauti tik skaičius.
let numbers = array.filter(function (num) {
  return typeof num === "number";
});
console.log(numbers);

// 3.52. Gauti tik tekstus (string).
let strings = array.filter(function (str) {
  return typeof str === "string";
});
console.log(strings);

// 3.53. Gauti tik tekstus (string), kurie turi daugiau nei 5 simbolius.
let stringsMoreThan5Symbols = array.filter(function (str) {
  return typeof str === "string" && str.length > 5;
});
console.log(stringsMoreThan5Symbols);

// 3.54. Gauti tik tekstus (string), kurie turi mažiau arba lygiai 5 simbolius.
let stringsLessThan5Symbols = array.filter(function (str) {
  return typeof str === "string" && str.length <= 5;
});
console.log(stringsLessThan5Symbols);

// 3.55. Gauti tik tekstus (string), kurie turi mažiau nei 7 simbolius.
let stringsLessThan7Symbols = array.filter(function (str) {
  return typeof str === "string" && str.length < 7;
});
console.log(stringsLessThan7Symbols);

// 3.56. Gauti tik tekstus (string), kurie turi raidę t.
let stringsHasT = array.filter(function (str) {
  return typeof str === "string" && str.includes("t");
});
console.log(stringsHasT);

// 3.57. Gauti tik tekstus (string), kurie turi raidę y.
let stringsHasY = array.filter(function (str) {
  return typeof str === "string" && str.includes("y");
});
console.log(stringsHasY);

// 3.58. Gauti tik tekstus (string), kurie turi raides e arba a.
let stringsHasEOrA = array.filter(function (str) {
  return typeof str === "string" && (str.includes("e") || str.includes("a"));
});
console.log(stringsHasEOrA);

// 3.59. Gauti tik tekstus (string), kurie turi raides t ir i.
let stringsHasTAndI = array.filter(function (str) {
  return typeof str === "string" && str.includes("t") && str.includes("i");
});
console.log(stringsHasTAndI);

// 3.60. Gauti tik tekstus (string), kurie turi raide t, bet neturi raidės k.
let stringsHasTNotK = array.filter(function (str) {
  return typeof str === "string" && str.includes("t") && !str.includes("k");
});
console.log(stringsHasTNotK);

// 3.61. Gauti tik tekstus (string), kurie turi raide a, bet neturi raidės s.
let stringsHasANotS = array.filter(function (str) {
  return typeof str === "string" && str.includes("a") && !str.includes("s");
});
console.log(stringsHasANotS);

// 3.62. Gauti tik tekstus (string), kurie turi daugiau nei vieną raidę t.
let stringMoreThan1T = array.filter(function (str) {
  return typeof str === "string" && str.split("t").length > 2;
});
console.log(stringMoreThan1T);

// 3.63. Gauti tik tekstus (string), kurie turi raidžių junginį st.
let stringHasST = array.filter(function (str) {
  return typeof str === "string" && str.includes("st");
});
console.log(stringHasST);

// 3.64. Gauti tik tekstus (string), kurie turi raidžių junginį nd.
let stringHasND = array.filter(function (str) {
  return typeof str === "string" && str.includes("nd");
});
console.log(stringHasND);

// 3.65. Gauti tik tekstus (string), kurie neturi raidės s.
let stringHasNotS = array.filter(function (str) {
  return typeof str === "string" && !str.includes("s");
});
console.log(stringHasNotS);

// 3.66. Gauti tik tekstus (string), kurie neturi raidės t.
let stringHasNotT = array.filter(function (str) {
  return typeof str === "string" && !str.includes("t");
});
console.log(stringHasNotT);

// 3.67. Gauti tik tekstus (string), kurie neturi raidės r ir l.
let stringHasNotRAndL = array.filter(function (str) {
  return typeof str === "string" && !str.includes("r") && !str.includes("l");
});
console.log(stringHasNotRAndL);

// 3.68. Gauti tik tekstus (string), kurie prasideda skaičiumi.
let stringStartsWithNumber = array.filter(function (str) {
  return typeof str === "string" && !isNaN(str.slice(0, 1));
});
console.log(stringStartsWithNumber);

// 3.69. Gauti tik tekstus (string), kurie prasideda raide s.
let stringStartsWithS = array.filter(function (str) {
  return typeof str === "string" && str.slice(0, 1).includes("s");
});
console.log(stringStartsWithS);

// 3.70. Gauti tik tekstus (string), kurie prasideda raide o.
let stringStartsWithO = array.filter(function (str) {
  return typeof str === "string" && str.slice(0, 1).includes("o");
});
console.log(stringStartsWithO);

// 3.70. Gauti tik tekstus (string), kurie baigiasi raide d.
let stringEndsWithD = array.filter(function (str) {
  return typeof str === "string" && str.slice(-1).includes("d");
});
console.log(stringEndsWithD);

// 3.71. Gauti tik tekstus (string), kurie baigiasi raide s.
let stringEndsWithS = array.filter(function (str) {
  return typeof str === "string" && str.slice(-1).includes("s");
});
console.log(stringEndsWithS);

// 3.72. Gauti tik tekstus (string), kurie turi daugiau nei 4 simbolius ir turi raidę o.
let stringMoreThan4SymbolsHasO = array.filter(function (str) {
  return typeof str === "string" && str.length > 4 && str.includes("o");
});
console.log(stringMoreThan4SymbolsHasO);

// 3.73. Gauti tik tekstus (string), kurie turi daugiau arba lygiai 5 simbolius ir turi raidę a.
// 3.74. Gauti tik tekstus (string), kurie turi daugiau arba lygiai 5 simbolius ir turi raidę a.
let stringMoreThan5SymbolsHasA = array.filter(function (str) {
  return typeof str === "string" && str.length >= 5 && str.includes("a");
});
console.log(stringMoreThan5SymbolsHasA);

// 3.75. Gauti tik tekstus (string), kurie turi porinį simbolių skaičių.
let stringEvenSymbols = array.filter(function (str) {
  return typeof str === "string" && str.length % 2 === 0;
});
console.log(stringEvenSymbols);

// 3.76. Gauti tik tekstus (string), kurie turi neporinį simbolių skaičių ir turi raidę s.
let stringOddSymbolsHasS = array.filter(function (str) {
  return typeof str === "string" && str.length % 2 !== 0 && str.includes("s");
});
console.log(stringOddSymbolsHasS);

// 3.77. Gauti tik tekstus (string), kurių trečias simbolis yra a.
let stringThirdSymbolA = array.filter(function (str) {
  return typeof str === "string" && str.slice(2, 3).includes("a");
});
console.log(stringThirdSymbolA);

// 3.78. Gauti tik tekstus (string), kurių ketvirtas simbolis yra l.
let stringForthSymbolL = array.filter(function (str) {
  return typeof str === "string" && str.slice(3, 4).includes("l");
});
console.log(stringForthSymbolL);

// 3.79. Gauti tik tekstus (string), kurių penktas simbolis nėra t ir kurie turi daugiau simbolių nei 4.
let stringFifthSymbolNotTMoreThan4Symbols = array.filter(function (str) {
  return (
    typeof str === "string" && !str.slice(4, 5).includes("t") && str.length > 4
  );
});
console.log(stringFifthSymbolNotTMoreThan4Symbols);

// 3.80. Gauti tik tekstus (string), kurių pirmas simbolis nėra e, kurie turi mažiau simbolių nei 6 ir kurie neprasideda skaičiumi.
let stringFirstSymbolNotELessThan6Symbols = array.filter(function (str) {
  return (
    typeof str === "string" &&
    !str.slice(0, 1).includes("e") &&
    str.length < 6 &&
    isNaN(str.slice(0, 1))
  );
});
console.log(stringFirstSymbolNotELessThan6Symbols);
