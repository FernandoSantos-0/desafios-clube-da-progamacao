import { readFileSync } from 'node:fs';

let input;

try {
  input = readFileSync('/dev/stdin', 'utf8');
} catch {
  input = '30\n10';
}

const values = input.trim().split(/\s+/);

const A = parseFloat(values[0]);
const B = parseFloat(values[1]);

const media = ((A * 3.5) + (B * 7.5)) / 11;

console.log(`MEDIA = ${media.toFixed(5)}`);
