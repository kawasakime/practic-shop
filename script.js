//1 задание
const str1 = "Привет, ";
const str2 = "Мир!";

alert(str1 + str2);

//2 задание
const a = 10;

if (a === 10) {
  alert("Верно");
} else {
  alert("Неверно");
}

//3 задание
let nums = ''
for (let i = 0; i <= 100; i += 2) {
  nums += `${i}\n`;
}
alert(nums)


//4 задание
let myStr = "aaa bbb ccc";
//---1 способ
myStr = myStr.replace("bbb", "");
alert(myStr);
//---2 способ
myStr = "aaa bbb ccc";
myStr = myStr.substring(0, 4) + myStr.substring(7);
alert(myStr);
//---3 способ
myStr = "aaa bbb ccc";
const arr = myStr.split(" ");
myStr = [arr[0], arr[2]].join(" ");
alert(myStr);

//5 задание
const arrNumbers = [1, 2, 3, 4, 5];

arrNumbers.splice(3, 0, "a");
arrNumbers.splice(4, 0, "b");
arrNumbers.splice(5, 0, "c");

alert(arrNumbers);

//6 задание
function arrayFill(value, size) {
  return Array(size).fill(value);
}

alert(arrayFill("x", 5));

//7 задание
const myArray = [3, 2, 7, 10];
let sum = 0;

for (let i = 0; i < myArray.length; i++) {
  sum += myArray[i];
}

alert(sum / myArray.length);
