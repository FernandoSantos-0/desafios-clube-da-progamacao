var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split(/\s+/);

function isPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    
    const limit = Math.sqrt(num);
    for (let i = 3; i <= limit; i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

function processNumber(nStr) {
    const num = parseInt(nStr, 10);
    
    if (!isPrime(num)) {
        return "Nada";
    }
    
    const primeDigits = new Set(['2', '3', '5', '7']);
    
    for (let i = 0; i < nStr.length; i++) {
        if (!primeDigits.has(nStr[i])) {
            return "Primo";
        }
    }
    
    return "Super";
}

for (let i = 0; i < lines.length; i++) {
    if (lines[i].length > 0) {
        console.log(processNumber(lines[i]));
    }
}
