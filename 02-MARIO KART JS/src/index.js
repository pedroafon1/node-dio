const player1 = {
  name : "Mario",
  speed : 4,
  maneuverability: 3,
  power: 3,
  points: 0, 
}

const player2 = {
  name : "Luigi",
  speed : 3,
  maneuverability: 4,
  power: 4,
  points: 0
}

async function rollDice() {
  Math.floor(Math.random() * 6) + 1;
}

(async function main() {
  console.log(
    `Corrida entre ${player1.name} e ${player2.name} começando...\n`,
  );
  
})();

