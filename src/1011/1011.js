
import { readFileSync } from 'node:fs';

let input;

try {
  input = readFileSync('/dev/stdin', 'utf8');
} catch {
  input = '3';
}

const value = input.trim().split('\n');

const pi = 3.14159;

const result = (4/3) * pi * value**3;

console.log('VOLUME = '+result.toFixed(3));
