// Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.

// 1. Even numbers background is green
// 2. Odd numbers background is yellow
// 3. Prime numbers background is red

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

// Get the container div
const numberContainer = document.getElementById('numberContainer');

// Generate numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    const numberDiv = document.createElement('div');
    numberDiv.textContent = i;
    numberDiv.classList.add('number');

    if (i % 2 === 0) {
        numberDiv.classList.add('even');
    } else {
        numberDiv.classList.add('odd');
    }

    if (isPrime(i)) {
        numberDiv.classList.add('prime');
    }

    numberContainer.appendChild(numberDiv);
}
