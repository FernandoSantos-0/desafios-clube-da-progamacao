
const input = '3\nabc\ndae\nabcde\n2\nabc\ndef\n0'

const lines = input.trim().split('\n');

let pos = 0;
const respostas = [];

while (pos < lines.length) {
    
    const N = Number(lines[pos++]);
    if (N === 0) break;

    const palavras = [];

    for (let i = 0; i < N; i++) {
        palavras.push(lines[pos++]);
    }

    palavras.sort();

    let bom = true;

    for (let i = 0; i < N - 1; i++) {
        if (palavras[i + 1].startsWith(palavras[i])) {
            bom = false;
            break;
        }
    }

    respostas.push(bom ? 'Conjunto Bom' : 'Conjunto Ruim');
}

console.log(respostas.join('\n'));
