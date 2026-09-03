
import { readFileSync } from 'node:fs';

let input;

try {
  input = readFileSync('/dev/stdin', 'utf8');
} catch {
  input = 'PEDRO\n500\n1230.30';
}

const values = input.trim().split('\n');

const B = parseFloat(values[1]);
const C = parseFloat(values[2]);

const result = B + (C * 0.15);

console.log(`TOTAL = R$ ${result.toFixed(2)}`);
