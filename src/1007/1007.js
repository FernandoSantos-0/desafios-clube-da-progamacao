
import { readFileSync } from 'node:fs';

let input;

try {
  input = readFileSync('/dev/stdin', 'utf8');
} catch {
  input = '0\n0\n7\n8';
}

const values = input.trim().split(/\s+/);

const A = parseFloat(values[0]);
const B = parseFloat(values[1]);
const C = parseFloat(values[2]);
const D = parseFloat(values[3]);

const media = (A * B - C * D);

console.log(`DIFERENCA = ${media}`);
