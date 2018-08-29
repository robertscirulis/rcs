// alert('Hello world');
// confirm('Hello world');

// console.log(window);
// console.log(document);
// .getElementById

function buttonClick() {
    var element = document
        .querySelector('#some-paragraph');
    if (element.innerText == 'foo') {
        element.innerText = 'bar';
    } else {
        element.innerText = 'foo';
    }
}

function theMightyButton() {
    var element = document
        .querySelectorAll('.other-paragraph');
    if (element.innerText == 'foo') {
        element.innerText = 'bar';
    } else {
        element.innerText = 'foo';
    }
}

// setTimeout(buttonClick, 1000);
// setInterval(buttonClick, 500);

function checkParagraphContent() {
    var elements = document.querySelectorAll('.other-paragraph');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        console.log(element);
    }
}


function add(number) {
    var element = document
        .getElementById('number');
    var currentValue = parseInt(element.innerText);
    element.innerText = currentValue + number;
}

var count = 0;
function addCount() {
    count++;
    document
        .getElementById('counter')
        .innerText = count;
}



function theMightyButton() {
    var elements = document.querySelectorAll('.other-paragraph');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        number = i + 1;
        if (element.innerText == 'foo ' + number) {
            element.innerText = 'bar ' + number;
        } else {
            element.innerText = 'foo ' + number;
        }
    }

}



// function isAnagram(name1, name2) {
//     if (name1.split('') && name2.split('')) {
//         return name1 == name2;
//     }
// }

// console.log(isAnagram('abby', 'baby'));

function isAnagram(str1, str2) {
    str1 = str1.replace(' ', '').split('').sort().join('');
    str2 = str2.replace(' ', '').split('').sort().join('');

    return str1 == str2;
}

console.log('sula ' + isAnagram('sula', 'alus'));
console.log('aaa ' + isAnagram('aaa', 'aaa'));
console.log('aab ' + isAnagram('aab', ' aba'));
console.log('random ' + isAnagram('gjsG', 'dfgj'));

function stuffChange() {
    var element = document
        .getElementById('display');
    if (element.innerText == 'foo') {
        element.innerText = 'bar';
    } else {
        element.innerText = 'foo';
    }
}

