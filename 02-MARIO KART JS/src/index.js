const player1 = {
  name: "Mario",
  speed: 4,
  maneuverability: 3,
  power: 3,
  points: 0,
};

const player2 = {
  name: "Luigi",
  speed: 3,
  maneuverability: 4,
  power: 4,
  points: 0,
};

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
  let random = Math.random();
  if (random < 0.33) return "RETA";
  if (random < 0.66) return "CURVA";
  return "CONFRONTO";
}

async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(`${characterName} 🎲 rolou dado para ${block}: ${diceResult} + ${attribute} = ${diceResult + attribute}`);
}

async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`\n🏁 Round ${round}:`);

    let block = await getRandomBlock();
    console.log(`Bloco: ${block}`);

    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    if (block === "RETA") {
      totalTestSkill1 = diceResult1 + character1.speed;
      totalTestSkill2 = diceResult2 + character2.speed;

      await logRollResult(character1.name, "velocidade", diceResult1, character1.speed);
      await logRollResult(character2.name, "velocidade", diceResult2, character2.speed);
    }

    if (block === "CURVA") {
      totalTestSkill1 = diceResult1 + character1.maneuverability;
      totalTestSkill2 = diceResult2 + character2.maneuverability;

      await logRollResult(character1.name, "manobrabilidade", diceResult1, character1.maneuverability);
      await logRollResult(character2.name, "manobrabilidade", diceResult2, character2.maneuverability);
    }

    if (block === "CONFRONTO") {
      totalTestSkill1 = diceResult1 + character1.power;
      totalTestSkill2 = diceResult2 + character2.power;

      await logRollResult(character1.name, "poder", diceResult1, character1.power);
      await logRollResult(character2.name, "poder", diceResult2, character2.power);
    }

    if (totalTestSkill1 > totalTestSkill2) {
      character1.points += 1;
      console.log(`🏆 ${character1.name} venceu o round!`);
    } else if (totalTestSkill2 > totalTestSkill1) {
      character2.points += 1;
      console.log(`🏆 ${character2.name} venceu o round!`);
    } else {
      console.log("🤝 Empate!");
    }
  }

  // Resultado final
  console.log(`\n🏁 Corrida finalizada!`);
  console.log(`${character1.name}: ${character1.points} pontos`);
  console.log(`${character2.name}: ${character2.points} pontos`);

  if (character1.points > character2.points) {
    console.log(`🎉 ${character1.name} venceu a corrida!`);
  } else if (character2.points > character1.points) {
    console.log(`🎉 ${character2.name} venceu a corrida!`);
  } else {
    console.log("⚖️ A corrida terminou empatada!");
  }
}

(async function main() {
  console.log(`🏎️ Corrida entre ${player1.name} e ${player2.name} começando...`);
  await playRaceEngine(player1, player2);
})();
