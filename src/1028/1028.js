const input = '3\n8 12\n9 27\n259 111';

const lines = input.trim().split(/\s+/).map(Number);

const N = lines[0];

let pos = 1;

function mdc(a, b) {
    while (b !== 0) {
        let resto = a % b;
        a = b;
        b = resto;
    }

    return a;
}

let resultado = [];

for (let i = 0; i < N; i++) {
    const F1 = lines[pos++];
    const F2 = lines[pos++];

    resultado.push(mdc(F1, F2));
}

console.log(resultado.join('\n'));
