import { readFileSync } from 'node:fs';

let input;

try {
    input = readFileSync('/dev/stdin', 'utf8');
} catch {
    input = '3\n1\n2\n3';
}

let lines = input.trim().split(/\s+/);

let T = parseInt(lines[0]);
let ciclo = [1, 7, 9, 3];
let resposta = [];

for (let i = 1; i <= T; i++) {
    let N = parseInt(lines[i]);

    resposta.push(ciclo[N % 4]);
}

console.log(resposta.join('\n'));
