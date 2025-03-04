let playerHP = 100;
let enemyHP = 100;

let responseText = document.getElementById("response");
console.log(responseText);
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

function unarmedStrike() {
  resetShield();
  if (playerHP === 0) {
    responseText.textContent = "You are dead.";
  } else {
    let damageUnshielded = Math.floor(Math.random() * 5) + 1;
    let damage = Math.max(0, damageUnshielded - enemyShield);
    enemyHP = Math.max(0, enemyHP - damage);
    responseText.textContent = `You struck Veneficus Malus with your fist for ${damageUnshielded}. It was shielded for ${enemyShield} damage, doing a total of ${damage} damage.`;
    enemyHPDisplay.textContent = "HP: " + enemyHP;
    if (enemyHP === 0) {
      responseText.textContent = "Veneficus Malus died! You win!";
      enemyResponse.textContent = "";
    } else {
      enemyAttack();
    }
  }
}

function castFireball() {
  resetShield();
  if (playerHP === 0) {
    responseText.textContent = "You are dead.";
  } else {
    let minDamage = 20;
    let damageUnshielded =
      Math.floor(Math.random() * (40 - minDamage + 1)) + minDamage;
    let damage = Math.max(0, damageUnshielded - enemyShield);
    enemyHP = Math.max(0, enemyHP - damage);
    responseText.textContent = `You cast fireball for ${damageUnshielded}. It was shielded for ${enemyShield} damage, doing a total of ${damage} damage.`;
    enemyHPDisplay.textContent = "HP: " + enemyHP;
    if (enemyHP === 0) {
      responseText.textContent = "Veneficus Malus died! You win!";
      enemyResponse.textContent = "";
    } else {
      enemyAttack();
    }
  }
}

function castThunderbolt() {
  resetShield();
  if (playerHP === 0) {
    responseText.textContent = "You are dead.";
  } else {
    let minDamage = 5;
    let damageUnshielded =
      Math.floor(Math.random() * (50 - minDamage + 1)) + minDamage;
    let damage = Math.max(0, damageUnshielded - enemyShield);
    enemyHP = Math.max(0, enemyHP - damage);
    responseText.textContent = `You cast thunderbolt for ${damageUnshielded}. It was shielded for ${enemyShield} damage, doing a total of ${damage} damage.`;
    enemyHPDisplay.textContent = "HP: " + enemyHP;
    if (enemyHP === 0) {
      responseText.textContent = "Veneficus Malus died! You win!";
      enemyResponse.textContent = "";
    } else {
      enemyAttack();
    }
  }
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
    if (enemyHP === 0) {
      responseText.textContent = "Veneficus Malus died! You win!";
      enemyResponse.textContent = "";
    } else {
      enemyAttack();
    }
  }
}

function enemyAttack() {
  let attack = Math.floor(Math.random() * 3);
  if (attack === 0) {
    let minDamage = 25;
    let enemyDamageUnshielded =
      Math.floor(Math.random() * (50 - minDamage + 1)) + minDamage;
    let enemyDamage = Math.max(0, enemyDamageUnshielded - shield);
    playerHP = Math.max(0, playerHP - enemyDamage);
    enemyResponse.textContent = `Veneficus Malus cast fireball for ${enemyDamageUnshielded} damage. It was shielded for ${shield} damage, doing a total of ${enemyDamage}.`;
    playerHPDisplay.textContent = "HP: " + playerHP;
  } else if (attack === 1) {
    let minDamage = 5;
    let enemyDamageUnshielded =
      Math.floor(Math.random() * (35 - minDamage + 1)) + minDamage;
    let enemyDamage = Math.max(0, enemyDamageUnshielded - shield);
    playerHP = Math.max(0, playerHP - enemyDamage);
    enemyResponse.textContent = `Veneficus Malus cast thunderbolt for ${enemyDamageUnshielded} damage. It was shielded for ${shield} damage, doing a total of ${enemyDamage}.`;
    playerHPDisplay.textContent = "HP: " + playerHP;
  } else {
    let minShield = 5;
    enemyShield = Math.floor(Math.random() * (50 - minShield + 1)) + minShield;
    let enemyShieldOutput =
      "He protected himself from " + enemyShield + " future damage.";
    enemyResponse.textContent =
      "Veneficus Malus cast shield." + " " + enemyShieldOutput;
    enemyShieldDisplay.textContent = "Enemy shield: " + enemyShield;
  }
  if (playerHP === 0) {
    responseText.textContent = "You died!";
    enemyResponse.textContent = "";
  }
}
