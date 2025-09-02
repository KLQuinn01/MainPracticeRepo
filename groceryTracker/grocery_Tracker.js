function calculateCost (item1, item2, item3) {
    item1 = parseFloat(document.getElementById('grocery1').value)
    item2 = parseFloat(document.getElementById('grocery2').value)
    item3 = parseFloat(document.getElementById('grocery3').value)

    let total = item1 + item2 + item3
    document.getElementById('result').innerText = `The total is: ${total}`;
}

// alternative

// function calculateCost() {
//   const itemElements = document.querySelectorAll('input');

//   const itemValues = Array.from(itemElements).map(element => parseFloat(element.value) || 0);

//   const total = itemValues.reduce((sum, value) => sum + value, 0);

// document.getElementById('result').innerText = total.toFixed(2);
// }