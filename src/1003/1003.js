import { readFileSync } from 'node:fs';

let input;

try {
  input = readFileSync('/dev/stdin', 'utf8');
} catch {
  input = '30\n10';
}

const line = input.trim().split('\n')

const a = parseInt(line[0], 10);
const b = parseInt(line[1], 10);

const result = a + b;

console.log('SOMA = ' + result);
