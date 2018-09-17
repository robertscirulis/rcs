var count = 0;
var spend = 0;
function addCount() {
    count++;
    document
        .getElementById('counter')
        .innerText = count;
    spend++;
    document
        .getElementById('spending')
        .innerText = spend;
};

var upgrade1x = 0;
var price1x = 10;

function firstUpgrade() {
    var money = document.getElementById('spending');
    var currentValue = parseInt(money.innerText)
    if (currentValue >= price1x) {
        setInterval(addCount, 1000);
        upgrade1x++;
        document
            .getElementById('1xUp')
            .innerText = upgrade1x;
        spend = currentValue - price1x;
        document
            .getElementById('spending')
            .innerText = spend;
        price1x++;
        currentPrice = document
            .getElementById('price-value1')

        // percent = price1x * 0.1;
        document
            .getElementById('price-value1')
            .innerText = price1x;
    } else if (money.innerText > price1x) {
        // alert('Hands off this button, not enough clicks!')
        document.getElementById('btn1').disabled = true;
    }
};




var upgrade10x = 0;
var price10x = 90;
function scndUpgrade() {
    var money = document.getElementById('spending');
    var currentValue = parseInt(money.innerText)
    if (currentValue >= price10x) {
        setInterval(addCount, 100);
        upgrade10x++;
        document
            .getElementById('10xUp')
            .innerText = upgrade10x;
        spend = currentValue - price10x;
        document
            .getElementById('spending')
            .innerText = spend;
        price10x++;
        // percent = document.getElementById('priceValue2');
        document
            .getElementById('price-value2')
            .innerText = price10x;
    } else if (money.innerText > price10x) {
        document.getElementById('btn2').disabled = true;
    }
}


