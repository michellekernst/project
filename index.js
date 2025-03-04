let playerHP = 100;
let enemyHP = 100;

let responseText = document.getElementById("response");
console.log(responseText);
let enemyHPDisplay = document.getElementById("enemyHPDisplay");
let enemyResponse = document.getElementById("enemyresponse");

let shieldOutput = 0;
let enemyShieldOutput = 0;

function enemyAttack() {
  let attack = Math.floor(Math.random() * 3);
  if (attack === 0) {
    let minDamage = 25;
    let enemyDamage =
      Math.floor(Math.random() * (50 - minDamage + 1)) + minDamage - shield;
    let enemyDamageOutput = "It did " + enemyDamage + " damage.";
    playerHP = Math.max(0, playerHP - enemyDamage);
    enemyResponse.textContent =
      "Veneficus Malus cast fireball." + " " + enemyDamageOutput;
    playerHPDisplay.textContent = "HP: " + playerHP;
  } else if (attack === 1) {
    let minDamage = 25;
    let enemyDamage =
      Math.floor(Math.random() * (50 - minDamage + 1)) + minDamage - shield;
    let enemyDamageOutput = "It did " + enemyDamage + " damage.";
    playerHP = Math.max(0, playerHP - enemyDamage);
    enemyResponse.textContent =
      "Veneficus Malus cast thunderbolt." + " " + enemyDamageOutput;
    playerHPDisplay.textContent = "HP: " + playerHP;
  } else {
    let minShield = 5;
    let shield = Math.floor(Math.random() * (50 - minShield + 1)) + minShield;
    let enemyShieldOutput =
      "He protected himself from " + shield + " future damage.";
    enemyResponse.textContent =
      "Veneficus Malus cast shield." + " " + enemyShieldOutput;
  }
  if (playerHP === 0) {
    responseText.textContent = "You died!";
    enemyResponse.textContent = "";
  }
}

function unarmedStrike() {
  if (playerHP === 0) {
    responseText.textContent = "You are dead.";
  } else {
    let damage = Math.floor(Math.random() * 5) + 1 - enemyShieldOutput;
    let damageOutput = "You did " + damage + " damage.";
    enemyHP = Math.max(0, enemyHP - damage);
    responseText.textContent =
      "You struck Veneficus Malus with your fist." + " " + damageOutput;
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
  if (playerHP === 0) {
    responseText.textContent = "You are dead.";
  } else {
    let minDamage = 10;
    let damage =
      Math.floor(Math.random() * (50 - minDamage + 1)) +
      minDamage -
      enemyShield;
    let damageOutput = "You did " + damage + " damage.";
    enemyHP = Math.max(0, enemyHP - damage);
    responseText.textContent = "You cast fireball." + " " + damageOutput;
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
  if (playerHP === 0) {
    responseText.textContent = "You are dead.";
  } else {
    let minDamage = 20;
    let damage =
      Math.floor(Math.random() * (40 - minDamage + 1)) +
      minDamage -
      enemyShield;
    let damageOutput = "You did " + damage + " damage.";
    enemyHP = Math.max(0, enemyHP - damage);
    responseText.textContent = "You cast thunderbolt." + " " + damageOutput;
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
  if (playerHP === 0) {
    responseText.textContent = "You are dead.";
  } else {
    let minShield = 5;
    let shield = Math.floor(Math.random() * (50 - minShield + 1)) + minShield;
    let shieldOutput =
      "You protected yourself from " + shield + " future damage.";
    responseText.textContent = "You cast shield." + " " + shieldOutput;
    if (enemyHP === 0) {
      responseText.textContent = "Veneficus Malus died! You win!";
      enemyResponse.textContent = "";
    } else {
      enemyAttack();
    }
  }
}
