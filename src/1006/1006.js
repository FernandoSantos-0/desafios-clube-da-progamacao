import { readFileSync } from 'node:fs';

let input;

try {
  input = readFileSync('/dev/stdin', 'utf8');
} catch {
  input = '5\n6\n7';
}

const values = input.trim().split(/\s+/);

const A = parseFloat(values[0]);
const B = parseFloat(values[1]);
const C = parseFloat(values[2]);

const media = ((A*2) + (B*3) + (C*5)) / 10;

console.log(`MEDIA = ${media.toFixed(1)}`);
