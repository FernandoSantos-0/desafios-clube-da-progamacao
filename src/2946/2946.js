const input = '0110\n2\n6\n4';

const lines = input.split('\n');

const binario = lines[0];
const quantidadeDeNumeros = parseInt(lines[1]);

let divisores = [];

for (let i = 0; i < quantidadeDeNumeros; i++) {

    const divisor = Number(lines[i + 2]);
    let resto = 0;

    for (let j = 0; j < binario.length; j++) {

        resto = (resto * 2 + Number(binario[j])) % divisor;

    };

    if (resto === 0) {

        divisores.push(divisor);
    };

};

if (divisores.length === 0) {

    console.log('Nenhum');

} else {

    divisores.sort((a, b) => a - b);
    
    console.log(divisores.join(' '));

};
