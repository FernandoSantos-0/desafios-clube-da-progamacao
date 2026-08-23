import { readFileSync } from 'node:fs';

let input;

try {
  input = readFileSync('/dev/stdin', 'utf8');
} catch {
  input = '100.64';
}

const raio = input;

const n = 3.14159;

const result = n * raio ** 2;

console.log(`A=${result.toFixed(4)}`);
