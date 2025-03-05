let playerHP = 250;
let enemyHP = 250;

let responseText = document.getElementById("response");
let enemyHPDisplay = document.getElementById("enemyHPDisplay");
let playerHPDisplay = document.getElementById("playerHPDisplay");
let enemyResponse = document.getElementById("enemyresponse");
let playerImg = document.getElementById("player-img");
let enemyImg = document.getElementById("enemy-img");
let stats = document.getElementById("stats");

let shield = 0;
let enemyShield = 0;

function checkEnemyDead() {
  if (enemyHP === 0) {
    responseText.textContent = "Veneficus Malus died! You win!";
    enemyResponse.textContent = "";
    enemyImg.src = "enemy/dead.gif";
  } else {
    enemyAttack();
  }
}

function checkPlayerDead() {
  if (playerHP === 0) {
    responseText.textContent = "You died!";
    enemyResponse.textContent = "";
    playerImg.src = "player/dead.gif";
  }
}

// player attacks //
function playerAttack(attackType) {
  if (playerHP === 0) {
    responseText.textContent = "You are dead."; // cannot attack if dead
  } else {
    let minDamage, maxDamage, attackName;
    switch (attackType) {
      case "unarmedStrike":
        minDamage = 1;
        maxDamage = 5;
        attackName = "struck Veneficus Malus";
        playerImg.src = "player/strike.gif";
        break;
      case "fireball":
        minDamage = 20;
        maxDamage = 40;
        attackName = "cast fireball";
        playerImg.src = "player/fireball.gif";
        break;
      case "thunderbolt":
        minDamage = 5;
        maxDamage = 50;
        attackName = "cast thunderbolt";
        playerImg.src = "player/lightning.gif";
        break;
    }

    let damageUnshielded =
      Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage; // player damage before any shields
    let damage = Math.max(0, damageUnshielded - enemyShield); // player damage after shields, no less than 0
    enemyHP = Math.max(0, enemyHP - damage); // enemy HP after attack, no less than 0

    responseText.textContent = `You ${attackName} for ${damageUnshielded} damage.`;

    if (enemyShield > 0) {
      responseText.textContent += ` It was shielded for ${enemyShield} damage, doing a total of ${damage} damage.`;
      enemyShield = 0;
    }

    enemyHPDisplay.textContent = enemyHP + " / 250";
    if (enemyHP < 62) {
      enemyHPDisplay.style.backgroundColor = "red";
    } else if (playerHP < 125) {
      enemyHPDisplay.style.backgroundColor = "orange";
    } else if (playerHP < 187) {
      enemyHPDisplay.style.backgroundColor = "yellow";
    }

    checkEnemyDead(); // if enemy has 0 HP, shows enemy dead
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
  if (playerHP === 0) {
    responseText.textContent = "You are dead."; // cannot shield if dead
    shield = 0;
  } else {
    playerImg.src = "player/idle.gif";
    let minShield = 5;
    shield = Math.floor(Math.random() * (50 - minShield + 1)) + minShield;
    let shieldOutput =
      "You protected yourself from " + shield + " future damage.";
    responseText.textContent = "You cast shield." + " " + shieldOutput;
    checkEnemyDead();
  }
}

// enemy attacks //
function enemyAttack() {
  let attack = Math.floor(Math.random() * 3);
  let minDamage, maxDamage, attackName;

  if (attack === 0) {
    // fireball
    enemyImg.src = "enemy/strike.gif";
    minDamage = 25;
    maxDamage = 50;
    attackName = "cast fireball";
  } else if (attack === 1) {
    // thunderbolt
    enemyImg.src = "enemy/attack.gif";
    minDamage = 5;
    maxDamage = 35;
    attackName = "cast thunderbolt";
  } else {
    // shield
    enemyImg.src = "enemy/sphere.gif";
    let minShield = 5;
    enemyShield = Math.floor(Math.random() * (50 - minShield + 1)) + minShield;
    let enemyShieldOutput =
      "He protected himself from " + enemyShield + " future damage.";
    enemyResponse.textContent =
      "Veneficus Malus cast shield." + " " + enemyShieldOutput;
    return;
  }

  let enemyDamageUnshielded =
    Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;
  let enemyDamage = Math.max(0, enemyDamageUnshielded - shield);
  playerHP = Math.max(0, playerHP - enemyDamage);
  enemyResponse.textContent = `Veneficus Malus ${attackName} for ${enemyDamageUnshielded} damage.`;

  if (shield > 0) {
    enemyResponse.textContent += ` It was shielded for ${shield} damage, doing a total of ${enemyDamage} damage.`;
    shield = 0; // reset shield after attack
  }

  playerHPDisplay.textContent = playerHP + " / 250";
  if (playerHP < 62) {
    playerHPDisplay.style.backgroundColor = "red";
  } else if (playerHP < 125) {
    playerHPDisplay.style.backgroundColor = "orange";
  } else if (playerHP < 187) {
    playerHPDisplay.style.backgroundColor = "yellow";
  }

  checkPlayerDead();
}
