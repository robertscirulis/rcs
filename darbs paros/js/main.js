






function fooBar() {
    var elements = document.querySelectorAll('.some-paragraph');
    for (var i = 0; i < elements.length; i++) {
        element = elements[i];
        number = i + 1;
        if (element.innerText == 'foo ' + number) {
            element.innerText = 'bar ' + number;
        } else {
            element.innerText = 'foo ' + number;
        }
    }
}

// querySelectorAll

var input = document.getElementById('screen2');
input.value = 0;

function add2(number) {
    var element = document
    .getElementById('screen2');
    var currentValue = element.value;
    element.value = currentValue + number;
}





function add(number) {
    var element = document
        .getElementById('screen1');
    var currentValue = parseInt(element.innerText);
    element.innerText = currentValue + number;
}

// function add(number) {
//     var element = document
//         .getElementById('number');
//     var currentValue = parseInt(element.innerText);
//     element.innerText = currentValue + number;
// }

