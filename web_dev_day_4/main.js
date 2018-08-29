// var someNumber = 123; // integer
// var someDecimal = 3.14; // float
// var someWord = 'Hello world'; // string ""
// var someTrue = true; //boolean (bool)
// var someNothing = null; // null

// Array (masīvs)
// var someArray = ['vaz,', 
// 'zaz', 
// 'gaz', 
// 'maz', 
// 'bmw', 
// 123, 
// 3.14, 
// true,
// ]; // array

// var i = 1;
// console.log(someArray[i]);

// Object
// var johnny = {
//     name: 'Johnny',
//     surname: 'Doe',
//     fullName: 'Johnny Deo',
//     age: '21',
// }; // object

// var i = 1;
// console.log(i);
// i = 2;
// console.log(i);
// i = 'foo';
// console.log(i);

// var i = 'foo';
// console.log(i);
// i = 'bar';
// console.log(i);
// i = 'baz';
// console.log(i);
// i = 1;
// console.log(i);
// i = 2;
// console.log(i);
// i = 3;
// console.log(i);

// +
// -
// *
// /
// %
// var number1 = 2;
// var number2 = 4;
// console.log(1 + 1);
// console.log(2 + 2 * 2);
// console.log(number1 + number2);
// console.log(number1 + 3);
// var number3 = number1 - number2;
// console.log(number3);
// console.log((2 + 2) * 2); // 8
// number1 = number1 +1;
// number1 += 1;
// number1++;
// number1--;
// console.log(number1);

// console.log(1 / 0);

// console.log(5 % 2);

// console.log('foo ' + 'bar');

// console.log(1 + '1');
// console.log('1' + 1);

// ==
// !=
// >
// <
// >=
// >=
// === strict comparison (equal)
// !== strict comparison (not equal)

// if (true) {
//     console.log('was true');
// } else {
//     console.log('was not true');
// }

// var name = 'Anna';

// if (name == 'Anna') {
//     console.log('Čau Anna');
// } else {
//     if (name == 'Jānis') {
//         console.log('Whats up Jānis');
//         } else {
//             console.log('Nepazīstu tevi');
//         }
//     }

// var a = 1;
// var b = 2;
// var c = 3;
// && = and
// || = or
// if (a == 2 && (b == 3 || c == 3) {

// }


// var name = 'Jānis';

// if (name == 'Jānis' 
// || name == 'Kārlis' 
// || name == 'Zane' ) {
//     console.log('Čau zināmais cilvēk');
// } else {
//     console.log('Nepazīstu tevi');
// }

// var name = 'Kārlis'

// switch (name) {
//     case 'Jānis':
//         console.log('Čau zināmais cilvēk');
//         break;
//     case 'Kārlis':
//         console.log('Čau zināmais cilvēk');
//         break;
//     case 'Zane':
//         console.log('Čau zināmais cilvēk');
//         break;
//     default:
//     console.log('Nepazīstu tevi');

// }

// to stop the script 'ctrl + c' (inside cmd)

// var i = 0

// while (i < 10) {
//     if (i < 5) {
//         console.log(i);
//     }
//     i++;
// }
// console.log(i);

// while (i < 20) {
//     if (i % 2 == 0) {
//     console.log(i);
//     }
//     i++;
// }

// var i3 =20;
// while (i3 >= 0) {
//     i3--;
//     console.log(i3);
// }

// var i = 0;
// while (i < 20) {
//     i++;
//     if (i == 5) {
//         continue;
//     }
//     console.log(i);
// }

// var i = 20;
// do {
//     console.log(i);
//     i++;
// }    while (i < 20);


// for (var i = 0; i < 20; i++) {
//     console.log(i);
// }

// for (var i = 20; i >= 0; i--) {
//     console.log(i);
// }

// lai 
// var cars =['vaz', 'gaz', 'zaz', 'maz', 'uaz', 'bmw'];
// for (var index = 0; index < cars.length; index++) {   
//     var car = cars[index];
//     console.log(car); 
// }

// var cars =['vaz', 'gaz', 'zaz', 'maz', 'uaz', 'bmw'];
// var superCar = 'gaz';
// for (var index = 0; index < cars.length; index++) {
//     var car = cars[index];
//     if (car == superCar){
//         // console.log(car);
//     }

// }

// function addTwoNumbers(number1, number2) {
//     return number1 + number2;
// }
// console.log(addTwoNumbers(2, 3));

// addTwoNumbers(2, 3)
// function addTwoNumbers(number1, number2) {
//     var sum = number1 + number2;
//     console.log(sum);
// }
// console.log(addTwoNumbers(2, 3));

// funkcija saņem divus parametrus - cilvēka vārdu un vecumu
// Kārlis, 50 
// Čau Kārli, tev ir 50 gadi!

// function greetPerson(name, age) {
//     console.log('Čau ' + name + ',Tev ir ' + age + 'gadi!' );
// }
// greetPerson('Kārli', 40);


// for (var i = 0; i < 30; i++) {
//     if (i % 2 === 0) {
//         console.log('Fizz');
//     } else {
//         if (i % 3 === 0) {
//             console.log('Bazz');
//         } else {
//             if (i % 2 === 0 && i % 3 === 0) {
//                 console.log('Fizz Bazz');
//             } else console.log(i);
//         }
//     }
// }



// for (i = 0; i < 30; i++) {
//     if(i % 2 === 0) {
//         console.log('Fizz');
//     } else if (i % 3 === 0){
//         console.log('Bazz');
//     } else if (i % 2 === 0 && i % 3 ===0) {
//         console.log('Fizz Bazz');
//     }
// }


// for (var i = 0; i < 30; i++) {
//     if (i % 2 === 0 && i % 3 === 0) {
//         console.log('Fizz Bazz');
//     } else if (i % 2 === 0) {
//         console.log('Fizz');
//     } else if (i % 3 === 0) {
//         console.log('Bazz');
//     } else console.log(i);
// }

// var i = 0;
// while (i < 20) {
//     i++;
//     if (i == 5) {
//         continue;
//     }
//     console.log(i);
// }

// var i = -1

// while (i < 30) {
//     i++;
//     if (i % 2 === 0 && i % 3 === 0) {
//         console.log('Fizz Bazz');
//     } else if (i % 2 === 0) {
//         console.log('Fizz');
//     } else if (i % 3 === 0) {
//         console.log('Bazz');
//     } else console.log(i);
// }


for (var i = 0; i < 30; i++) {
    var output = '';
    if (i % 2 === 0) {
        output = 'Fizz';
    }
    if (i % 3 === 0) {
        output += 'Bazz';
    }
    if (output === '') {
        output = i;
    }
    console.log(output);
}


