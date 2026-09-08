
import { readFileSync } from 'node:fs';

let input;

try {
  input = readFileSync('/dev/stdin', 'utf8');
} catch {
  input = '12\n1\n5.30\n16\n2\n5.10';
}


const values = input.trim().split(/\s+/);

const cod1 = parseInt(values[0]);
const qtd1 = parseInt(values[1]);
const valor1 = parseFloat(values[2]);

const cod2 = parseInt(values[3]);
const qtd2 = parseInt(values[4]);
const valor2 = parseFloat(values[5]);

const total = (qtd1 * valor1) + (qtd2 * valor2);

console.log('VALOR A PAGAR: R$ ' + total.toFixed(2));