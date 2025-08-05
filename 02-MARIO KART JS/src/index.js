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

async function getRandomBlock() {
  let random = Math.random();
  let result;

  switch (true) {
    case random < 0.33:
      result = "RETA"
      break;
    case random < 0.66:
      result = "CURVA"
      break;
    
    default:
      result = "CONFRONTO"
      break;
  }
  
  return result
}

async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult}`);
  
}


async function playRaceEngine(character1, character2) {
  for(let round =1; round <= 5; round++) {
    console.log(`🏁 Round ${round}:\n`);

    // sortear bloco

    let block = await getRandomBlock();
    console.log(`Bloco sorteado: ¨${block}`)

    // rolar os dados

    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    // hability test

    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    if(block === "RETA") {
      totalTestSkill1 = diceResult1 + character1.speed;      
      totalTestSkill2 = diceResult2 + character2.speed;
      
      await logRollResult(character1.name, "speed", diceResult1, character1.speed);
      await logRollResult(character2.name, "speed", diceResult2, character2.speed);

    }
    if(block === "CURVA") {
      totalTestSkill1 = diceResult1 + character1.maneuverability;      
      totalTestSkill2 = diceResult2 + character2.maneuverability;
      
      await logRollResult(character1.name, "maneuverability", diceResult1, character1.maneuverability);
      await logRollResult(character2.name, "maneuverability", diceResult2, character2.maneuverability);
    }
    if(block === "CONFRONTO") {
      
    }
  }
  
}

(async function main() {
  console.log(
    `🏁 Corrida entre ${player1.name} e ${player2.name} começando...\n`,
  );

  await playRaceEngine(player1, player2);
  
})();

