var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split(/\s+/).map(Number);

let pos = 0;
let N = lines[pos++];
let resultado = [];

for (let i = 0; i < N; i++) {
    let M = lines[pos++];
    let numeros = lines.slice(pos, pos + M);
    pos += M;

    let impares = numeros.filter(n => n % 2 !== 0);

    impares.sort((a, b) => a - b);

    let ordenados = [];
    let menor = 0;
    let maior = impares.length - 1;

    while (menor <= maior) {
        ordenados.push(impares[maior]);
        maior--;

        if (menor <= maior) {
            ordenados.push(impares[menor]);
            menor++;
        }
    }

    resultado.push(ordenados.join(' '));
}

console.log(resultado.join('\n'));