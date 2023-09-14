// Užduotis:
// Dirbti su šiuo masyvu:
// [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751];

// Atlikus šias užduotis eilės tvarka masyvas turėtų atrodyti taip:
// ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']

let array = [
  4,
  5,
  -5556,
  155,
  640,
  "15x",
  6789,
  -5564,
  478,
  654,
  "obuolys",
  789,
  -51,
  55,
  -222,
  0,
  -357,
  -56,
  "trylika",
  444,
  7778,
  4154,
  4751,
];

// 1.1. Pašalinti pirmą masyvo narį.
array.shift();
// console.log(array);

// 1.2. Pašalinti paskutinį masyvo narį.
array.pop();
// console.log(array);

let halfArraysLength = array.length / 2;
let middleNo = array.splice(halfArraysLength, 1);
// console.log(middleNo);
// console.log(array);

// 1.4. Pašalinti priešpaskutinį masyvo narį.
array.splice(-2, 1);
// console.log(array);

// 1.5. Pašalinti antrą masyvo narį.
array.splice(1, 1);
// console.log(array);

// 1.6. Pašalinti 7 ir 8 masyvo narius.
array.splice(6, 2);
// console.log(array);

// 1.7. Pašalinti 4, 5 ir 6 masyvo narius skaičiuojant nuo galo.
array.splice(-6, 3);
// console.log(array);

// 1.8. Pašalinti trečią masyvo narį ir į jo vietą įdėti skaičių 888.
array.splice(2, 1, 888);
// console.log(array);

// 1.9. Pašalinti dešimtą masyvo narį ir į jo vietą įdėti skaičius: 33, 789 ir 6543.
array.splice(9, 1, 33, 789, 6543);
// console.log(array);

// 1.10. Pašalinti paskutinį masyvo narį į jo vietą įdėti skaičius: 321, 654, 987.
array.pop();
array.push(321, 654, 987);
// console.log(array);

// 1.11. Tarp pirmo ir antro masyvo narių įdėti skaičių 11.
array.splice(1, 0, 11);
// console.log(array);

// 1.12. Tarp 13 ir 14 masyvo narių įdėti skaičių 1.
array.splice(13, 0, 1);
// console.log(array);

// 1.13. Tarp paskutinio ir priešpaskutinio masyvo narių įdėti skaičių -1.
array.splice(-1, 0, -1);
// console.log(array);

// 1.14. Į masyvo pradžią pridėti skaičius: 1, 2, 3.
array.unshift(1, 2, 3);
// console.log(array);

// 1.15. Į masyvo pabaigą pridėti skaičius: -333, -321, -312.
array.push(-333, -321, -312);
// console.log(array);

// 1.16. Į masyvo vidurį pridėti skaičių 0.
let halfArraysLength2 = array.length / 2;
array.splice(halfArraysLength2, 0, 0);
// console.log(array);

// 1.17. Pašalinti pirmą masyvo narį.
array.shift();
// console.log(array);

// 1.18. Pašalinti paskutinį masyvo narį.
array.pop();
// console.log(array);

// 1.19. Į masyvo pradžią pridėti žodį "start".
array.unshift("start");
// console.log(array);

// 1.20. Į masyvo pabaigą pridėti žodį "end".
array.push("end");
console.log(array);

// 2. Tęsiant darbą su šiuo masyvu atlikti šias užduotis naudojant slice metodą. Kiekvienai užduočiai sukurti naują kintamąjį, jame išsaugoti reikšmę, kurią grąžina slice metodas, ir šį kintamąjį išvesti į konsolę:

// 2.1. Gauti pirmą masyvo narį.
let firstArrayMember = array.slice(0, 1);
console.log(firstArrayMember);

// 2.2. Gauti paskutinį masyvo narį.
let lastArrayMember = array.slice(-1);
console.log(lastArrayMember);

// 2.3. Gauti antrą masyvo narį.
let secondArrayMember = array.slice(1, 2);
console.log(secondArrayMember);

// 2.4. Gauti priešpaskutinį masyvo narį.
let penultimateArrayMember = array.slice(-2, -1);
console.log(penultimateArrayMember);

// 2.5. Gauti aštuntą masyvo narį.
let eightArrayMember = array.slice(7, 8);
console.log(eightArrayMember);

// 2.6. Gauti devintą masyvo narį skaičiuojant nuo galo.
let fromBack9ArrayMember = array.slice(-9, -8);
console.log(fromBack9ArrayMember);

// 2.7. Gauti vidurinį masyvo narį.
let middle = array.length / 2;
let middleArrayMember = array.slice(middle, -middle);
console.log(middleArrayMember);

// 2.8. Gauti pirmus tris masyvo narius.
let firstThreeArrayMembers = array.slice(0, 3);
console.log(firstThreeArrayMembers);

// 2.9. Gauti paskutinius tris masyvo narius.
let lastThreeArrayMembers = array.slice(-3);
console.log(lastThreeArrayMembers);

// 2.10. Gauti pirmus 10 masyvo narius.
let firstTenArrayMembers = array.slice(0, 10);
console.log(firstTenArrayMembers);

// 2.11. Gauti paskutinius 10 masyvo narius.
let lastTenArrayMembers = array.slice(-10);
console.log(lastTenArrayMembers);

// 2.12. Gauti nuo 3 iki 8 masyvo nario (iš viso 6 nariai).
let fromThreeToEightArrayMembers = array.slice(2, 8);
console.log(fromThreeToEightArrayMembers);

// 2.13. Gauti nuo 5 iki 9 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 5 nariai).
let fromBackFiveToNineArrayMembers = array.slice(-9, -4);
console.log(fromBackFiveToNineArrayMembers);

// 2.14. Gauti nuo 11 iki 19 masyvo nario (iš viso 9 nariai).
let fromElevenToNineteenArrayMembers = array.slice(10, 19);
console.log(fromElevenToNineteenArrayMembers);

// 2.15. Gauti nuo 9 iki 17 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 9 nariai).
let fromBack9To17ArrayMembers = array.slice(-17, -8);
console.log(fromBack9To17ArrayMembers);

// 2.16. Gauti visus masyvo narius išskyrus pirmą.
let allButFirstArrayMembers = array.slice(1);
console.log(allButFirstArrayMembers);

// 2.17. Gauti visus masyvo narius išskyrus paskutinį.
let allButLastArrayMembers = array.slice(0, -1);
console.log(allButLastArrayMembers);

// 2.18. Gauti visus masyvo narius išskyrus pirmus 5.
let allButFirst5ArrayMembers = array.slice(5);
console.log(allButFirst5ArrayMembers);

// 2.19. Gauti visus masyvo narius išskyrus paskutinius 5.
let allButLast5ArrayMembers = array.slice(0, -5);
console.log(allButLast5ArrayMembers);

// 2.20. Gauti visus masyvo narius iki vidurinio masyvo nario, vidurinio nario neįskaičiuojant (iš viso 13 narių).
let tillTheMiddleArrayMembers = array.slice(0, middle);
console.log(tillTheMiddleArrayMembers);

// 2.21. Gauti visus masyvo narius nuo vidurinio masyvo nario, vidurinio nario neįskaičiuojant, iki pabaigos (iš viso 13 narių).
let fromTheMiddleArrayMembers = array.slice(middle + 1);
console.log(fromTheMiddleArrayMembers);

// 2.22. Gauti visus narius išskyrus pirmą ir paskutinį.
let allButNotFirstAndLastArrayMembers = array.slice(1, -1);
console.log(allButNotFirstAndLastArrayMembers);

// 2.23. Gauti visus narius išskyrus pirmus penkis ir paskutinius tris.
let allButNotFirst5AndLast3ArrayMembers = array.slice(5, -3);
console.log(allButNotFirst5AndLast3ArrayMembers);

// 2.24. Gauti visus narius išskyrus pirmą ir paskutinius 8.
let allButNotFirstAndLast8ArrayMembers = array.slice(1, -8);
console.log(allButNotFirstAndLast8ArrayMembers);

// 2.25. Gauti visus narius išskyrus pirmus 7 ir paskutinį.
let allButNotFirst7AndLastArrayMembers = array.slice(7, -1);
console.log(allButNotFirst7AndLastArrayMembers);

// 2.26. Gauti visus narius išskyrus pirmus 9 ir paskutinius 12.
let allButNotFirst9AndLast12ArrayMembers = array.slice(9, -12);
console.log(allButNotFirst9AndLast12ArrayMembers);

// 2.27. Gauti 9 narius skaičiuojant nuo 11.
let nineFrom11ArrayMembers = array.slice(10, 19);
console.log(nineFrom11ArrayMembers);

// 2.28. Gauti 12 narių skaičiuojant nuo 8.
let twelveFrom8ArrayMembers = array.slice(7, 19);
console.log(twelveFrom8ArrayMembers);

// 2.29. Gauti pirmus penkis ir paskutinius šešis masyvo narius. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.
let firstFive = array.slice(0, 5);
let lastSix = array.slice(-6);
let connectedArray = firstFive.concat(lastSix);
console.log(connectedArray);

// 2.30. Gauti masyvo narius nuo 3 iki 5 ir nuo 15 iki 17. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.
let from3To5 = array.slice(2, 5);
let from15To17 = array.slice(14, 17);
let connectedArray2 = from3To5.concat(from15To17);
console.log(connectedArray2);
