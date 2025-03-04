let playerHP = 250;
let enemyHP = 250;

let responseText = document.getElementById("response");
let enemyHPDisplay = document.getElementById("enemyHPDisplay");
let playerHPDisplay = document.getElementById("playerHPDisplay");
let enemyResponse = document.getElementById("enemyresponse");
let enemyShieldDisplay = document.getElementById("enemyshielddisplay");
let playerShieldDisplay = document.getElementById("playershielddisplay");

let shield = 0;
let enemyShield = 0;

function resetShield() {
  shield = 0;
  enemyShield = 0;
  playerShieldDisplay.textContent = "Your shield: " + shield;
  enemyShieldDisplay.textContent = "Enemy shield: " + shield;
}

function ifShielded() {
  if (enemyShield > 0) {
    responseText.textContent += ` It was shielded for ${enemyShield} damage, doing a total of ${damage} damage.`;
  }
}

function checkEnemyDead() {
  if (enemyHP === 0) {
    responseText.textContent = "Veneficus Malus died! You win!";
    enemyResponse.textContent = "";
  } else {
    enemyAttack();
  }
}

// Player attacks //
function playerAttack(attackType) {
  resetShield();
  if (playerHP === 0) {
    responseText.textContent = "You are dead.";
  } else {
    let minDamage, maxDamage, attackName;
    switch (attackType) {
      case "unarmedStrike":
        minDamage = 1;
        maxDamage = 5;
        attackName = "struck Veneficus Malus with your fist";
        break;
      case "fireball":
        minDamage = 20;
        maxDamage = 40;
        attackName = "cast fireball";
        break;
      case "thunderbolt":
        minDamage = 5;
        maxDamage = 50;
        attackName = "cast thunderbolt";
        break;
    }
    let damageUnshielded =
      Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;
    let damage = Math.max(0, damageUnshielded - enemyShield);
    enemyHP = Math.max(0, enemyHP - damage);
    responseText.textContent = `You ${attackName} for ${damageUnshielded} damage.`;

    ifShielded();

    enemyHPDisplay.textContent = "HP: " + enemyHP;

    checkEnemyDead();
  }
}

function unarmedStrike() {
  playerAttack("unarmedStrike");
}

function castFireball() {
  playerAttack("fireball");
}

function castThunderbolt() {
  playerAttack("thunderbolt");
}

function castShield() {
  resetShield();

  if (playerHP === 0) {
    responseText.textContent = "You are dead.";
  } else {
    let minShield = 5;
    shield = Math.floor(Math.random() * (50 - minShield + 1)) + minShield;
    let shieldOutput =
      "You protected yourself from " + shield + " future damage.";
    responseText.textContent = "You cast shield." + " " + shieldOutput;
    playerShieldDisplay.textContent = "Player shield: " + shield;

    checkEnemyDead();
  }
}

function enemyAttack() {
  let attack = Math.floor(Math.random() * 3);
  let minDamage, maxDamage, attackName;

  if (attack === 0) {
    // fireball
    minDamage = 25;
    maxDamage = 50;
    attackName = "cast fireball";
  } else if (attack === 1) {
    // thunderbolt
    minDamage = 5;
    maxDamage = 35;
    attackName = "cast thunderbolt";
  } else {
    // shield
    let minShield = 5;
    enemyShield = Math.floor(Math.random() * (50 - minShield + 1)) + minShield;
    let enemyShieldOutput =
      "He protected himself from " + enemyShield + " future damage.";
    enemyResponse.textContent =
      "Veneficus Malus cast shield." + " " + enemyShieldOutput;
    enemyShieldDisplay.textContent = "Enemy shield: " + enemyShield;
    return;
  }

  let enemyDamageUnshielded =
    Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;
  let enemyDamage = Math.max(0, enemyDamageUnshielded - shield);
  playerHP = Math.max(0, playerHP - enemyDamage);
  enemyResponse.textContent = `Veneficus Malus ${attackName} for ${enemyDamageUnshielded} damage.`;

  if (shield > 0) {
    enemyResponse.textContent += ` It was shielded for ${shield} damage, doing a total of ${enemyDamage}.`;
  }

  playerHPDisplay.textContent = "HP: " + playerHP;

  if (playerHP === 0) {
    responseText.textContent = "You died!";
    enemyResponse.textContent = "";
  }
}
