var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split(/\s+/);

if (lines.length > 0 && lines[0] !== '') {
    let ptr = 0;
    let N = parseInt(lines[ptr++], 10);

    for (let i = 0; i < N; i++) {
        if (ptr >= lines.length) break;
        let M = parseInt(lines[ptr++], 10);
        let list = [];
        
        for (let j = 0; j < M; j++) {
            list.push(parseInt(lines[ptr++], 10));
        }

        let odds = list.filter(x => x % 2 !== 0);

        odds.sort((a, b) => a - b);

        let result = [];
        let left = 0;
        let right = odds.length - 1;

        while (left <= right) {
            if (right >= left) {
                result.push(odds[right]);
                right--;
            }
            if (left <= right) {
                result.push(odds[left]);
                left++;
            }
        }
        console.log(result.join(' '));
    }
}