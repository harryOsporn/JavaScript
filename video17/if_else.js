let laLiga = ['Barca', 'RealMardrid', 'AleticoMadrid'];
console.log('Rank\t', 'Team');
let i = 0;
while (i < laLiga.length) {
    if (laLiga[i].length === 5) {
        console.log(`${i + 1} \t    `, laLiga[i]);
    }
    else {
        console.log(`${laLiga[i]} behind ${laLiga[0]}`);
    }
    i++;
}
