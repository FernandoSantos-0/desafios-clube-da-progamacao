
import { readFileSync } from 'node:fs';

let input;

try {
  input = readFileSync('/dev/stdin', 'utf8');
} catch {
  input = '25\n100\n5.50';
}

const values = input.trim().split('\n');

const A = parseInt(values[0]);
const B = parseInt(values[1]);
const C = parseFloat(values[2]);

const result = B * C;

console.log(`NUMBER = ${A}\nSALARY = U$ ${result.toFixed(2)}`);
