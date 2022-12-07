console.log(`Hello everyone`);
let arr = ['Asernal', 'ManCity', 'Tottoha'];
let i = 0;
console.log(`Ranking\t\tTeam\t\tMatches`);
while (true) {
    console.log(`${i + 1}\t\t\t${arr[i]}\t\t14`);
    i++;
    if (i >= arr.length) {
        break;
    }
}

console.log(`Second method: `);

let j = 0;
let flag = false;
while (!flag) {
    console.log(`${j + 1}\t\t\t${arr[j]}\t\t14`);
    j++;
    if (j >= arr.length) {
        flag = true;
    }
}