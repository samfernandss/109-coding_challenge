'use strict';

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    }
}

const gameEvents = new Map([
    [17, 'Goal'],
    [36, 'Substitution'],
    [47, 'Goal'],
    [61, 'Substitution'],
    [64, 'Yellow card'],
    [69, 'Red card'],
    [70, 'Substitution'],
    [72, 'Substitution'],
    [76, 'Goal'],
    [80, 'Goal'],
    [92, 'Yellow card'],
]);

const eventsSet = new Set([]);
for (const [key, value] of gameEvents){
    eventsSet.add(value);
}
const events = [...eventsSet]
console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

const players1 = [...game.players[0]];
const players2 = [...game.players[1]];

//const [players1, players2] = game.players;

const [gk, ...fieldPlayers] = players1;

const allPlayers = [...players1, ...players2];

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

const { team1, x: draw, team2 } = game.odds;
//const {odds: {team1, x: draw, team2}} = game;
console.log(team1, draw, team2);

function printGoals(...player) {
    console.log('Goals: ' + player.length);
}

console.log(game.odds.team1 || game.odds.team2);

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

team1 < team2 && console.log('TEAM 1');
team1 > team2 && console.log('TEAM 2');

const goalPlayers = game.scored.entries();
for (const [key, playerName] of goalPlayers) {
    console.log(`${playerName}: Goal ${Number(key)+1}`);
}

let calc = 0;
const oddsArr = Object.values(game.odds);
for (const odd of oddsArr) {
    calc += odd;
}
console.log(`The average odd is ${calc/oddsArr.length}`);

console.log(Object.entries(game.odds));
for (const [typeOdd, numberOdd] of Object.entries(game.odds)) {
    console.log(`Odd of ${game[typeOdd]? 'victory ' + game[typeOdd] : 'draw'}: ${numberOdd}`);
}

//não entendi
const scorers = {};
for (const player of game.scored) {
    scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);