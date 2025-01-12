const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 800; //window.innerWidth;
canvas.height = 1000; //window.innerHeight;

let isPaused = false;
const SPEED = 5;
const ROTATIONAL_SPEED = 0.05;
const FRICTION = 0.9;
const PROJECT_SPEED = 3;
let can_fire = true;
let controllerEnabled = false;
let canFire = true;
const keys = {
  a: { pressed: false },
  d: { pressed: false },
  w: { pressed: false },
  s: { pressed: false },
  space: { pressed: false },
  left: { pressed: false },
  right: { pressed: false },
  up: { pressed: false },
  down: { pressed: false },
};
const projectiles = [];
const stars = [];
const enemies = [];
const powerup = [];
let gameMenu = document.querySelector("#gameMenu");
let gameHUD = document.querySelector("#gameHUD");


class Player {
  constructor({ position, velocity }) {
    this.position = position;
    this.velocity = velocity;
    this.image = new Image();
    this.image.src = "./img/spacecat.png";
    this.hp = 3;
  }
   
  draw() {
    c.drawImage(this.image, this.position.x, this.position.y);
    this.width = this.image.width;
    this.height = this.image.height;
  }

  update() {
    this.draw();

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    // console.log(this.position);

    ///borders
    if (this.position.y < 10) {
      //console.log("top bounds");
      this.position.y = 15;
    } else if (this.position.x < 10) {
      this.position.x = 15;
    } else if (this.position.y + this.image.height > canvas.height - 10) {
      this.position.y = canvas.height - this.image.height - 15;
    } else if (this.position.x + this.image.width > canvas.width - 10) {
      this.position.x = canvas.width - this.image.width - 15;
    }
  }
}

class Projectile {
  constructor({ position, velocity }) {
    this.position = position;
    this.velocity = velocity;
    this.image = new Image();
    this.image.src = "./img/bullet_red2.png";
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y);
    this.width = this.image.width;
    this.height = this.image.height;
  }

  update() {
    this.draw();

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    // console.log(this.position);
  }
}

class PowerUp{
  constructor({position, velocity}){
    this.position = position,
    this.velocity = velocity,
    this.height = 30,
    this.width = 30
  }

  draw(){
    c.fillStyle = 'green'
    c.fillRect(this.position.x, this.position.y, this.width, this.height)
  }

  update(){
      
    //console.log(this.rndActionCount)
    //console.log(this.position.y);
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

  }
}

class Enemy {
  constructor({position, velocity}){
    this.position = position,
    this.velocity = velocity,
    this.height = 30,
    this.width = 40,
    this.counter = 0,
    this.rndActionCount = Math.floor(Math.random() * 100 + 20);
  }

  draw(){
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y ,this.width, this.height)
  }

    //create a step counter (step = int)++
    //create lookp table to change trajectory based on steps
    //[step] = velocity {x: changeHorizontal, y: changeVertical}

    update(){
      
      //console.log(this.rndActionCount)
      //console.log(this.position.y);
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;

      /*if(this.counter == this.rndActionCount ){
        if(this.position.x > canvas.width / 2){
            this.velocity.x -= 1;
        }
        else{
          this.velocity.x += 1;
        }
      }

      this.counter += 1*/
    }
}

class Star {
  constructor({ position, velocity }) {
    this.position = position;
    this.velocity = velocity;
    this.radius = Math.random() * 6 + 1;
  }

  draw() {
    c.beginPath();
    c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false);
    c.closePath();
    c.fillStyle = "white";
    c.fill();
  }

  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}

const starIntervalId = window.setInterval(() => {
  if (!isPaused) {
    const index = Math.floor(Math.random() * canvas.width);

    stars.push(
      new Star({
        position: {
          x: index,
          y: 0,
        },
        velocity: {
          x: 0,
          y: SPEED + 3,
        },
      })
    );
   // console.log(stars);
  }
}, 200);

const enemyIntervalId = window.setInterval(() => {
  if (!isPaused) {
    const index = Math.floor(Math.random() * canvas.width);

    enemies.push(
      new Enemy({
        position: {
          x: index,
          y: 0,
        },
        velocity: {
          x: 0,
          y: SPEED - 3,
        },
      })
    );
   //console.log(enemies);
  }
}, 1000);

const powerupIntervalId = window.setInterval(() => {
  if (!isPaused) {
    const index = Math.floor(Math.random() * canvas.width - 30);

    powerup.push(
      new PowerUp({
        position: {
          x: index,
          y: 0,
        },
        velocity: {
          x: 0,
          y: SPEED - 3,
        },
      })
    );
   //console.log(enemies);
  }
}, 3000);
 
 
function rectangularCollision({ rectangle, rectangle2 }) {
  //console.log(rectangle.height)
  return (
    rectangle.position.x + rectangle.width >= rectangle2.position.x &&
    rectangle.position.x <= rectangle2.position.x + rectangle2.width &&
    rectangle.position.y + rectangle.height >= rectangle2.position.y &&
    rectangle.position.y <= rectangle2.position.y + rectangle2.height
  );
}

const player = new Player({
  position: { x: canvas.width / 2, y: canvas.height / 2 },
  velocity: { x: 0, y: 0 },
});

const en1 = new Enemy({
  position: { x: canvas.width / 2, y: 0},
  velocity: { x: 0, y: SPEED -4 },
})

function animate() {
  if (!isPaused) {
    window.requestAnimationFrame(animate);
  }

  if(controllerEnabled){
    controllerMapping();

  }

  c.fillStyle = "black";
  c.fillRect(0, 0, canvas.width, canvas.height);

  player.update();
  gameHUD.innerHTML = "HP: " + player.hp;
  //console.log(gameHUD);
  //en1.update();

  //Projectile managment
  for (let i = projectiles.length - 1; i >= 0; i--) {
    const projectile = projectiles[i];
    projectile.update();

    for (let j = enemies.length - 1; j >= 0; j--) {
      const enemy = enemies[j];
      if(rectangularCollision({rectangle: projectile , rectangle2: enemy })){
        console.log("bullet hit")
        projectiles.splice(i, 1)
        enemies.splice(j, 1);
      }
    }
    

    //projectile garbage collection
    if (
      projectile.position.x + projectile.image.width < 0 ||
      projectile.position.x - projectile.image.width > canvas.width ||
      projectile.position.y - projectile.image.width > canvas.height ||
      projectile.position.y + projectile.image.width < 0
    ) {
      projectiles.splice(i, 1);
    }
  }

  //Star managment
  for (let i = stars.length - 1; i >= 0; i--) {
    const star = stars[i];
    star.update();

    //star garbage collection
    if (
      star.position.x + star.radius < 0 ||
      star.position.x - star.radius > canvas.width ||
      star.position.y - star.radius > canvas.height ||
      star.position.y + star.radius < 0
    ) {
      stars.splice(i, 1);
    }
  }

  //enemy managment
  for (let i = enemies.length - 1; i >= 0; i--) {
    const enemy = enemies[i];
    enemy.update();


    //player collision 
    //console.log(rectangularCollision({rectangle: player, rectangle2: enemy}))
    if(rectangularCollision({rectangle: player , rectangle2: enemy })){
      player.hp--;
      enemies.splice(i, 1);

      if(player.hp == 0){
        console.log("Game Over");
        alert("Game Over");
        gameMenu.style.display = "block";
        gameMenu.innerHTML = "GAME OVER V0.1";
        window.clearInterval(starIntervalId);
        window.clearInterval(enemyIntervalId);
        window.clearInterval(powerupIntervalId);
        window.location.reload();
        
      }
    }
    //enemy garbage collection
    if (
      enemy.position.x + enemy.width < 0 ||
      enemy.position.x - enemy.width > canvas.width ||
      enemy.position.y - enemy.height > canvas.height ||
      enemy.position.y + enemy.height < 0
    ) {
      enemies.splice(i, 1);
    }
  }

  //powerup managment
  for (let i = powerup.length - 1; i >= 0; i--) {
    const pow = powerup[i];
    pow.update();


    //player collision 
    //console.log(rectangularCollision({rectangle: player, rectangle2: pow}))
    if(rectangularCollision({rectangle: player , rectangle2: pow })){
      powerup.splice(i, 1);
      if(player.hp < 3){
        player.hp++;
      }
    }
    //pow garbage collection
    if (
      pow.position.x + pow.width < 0 ||
      pow.position.x - pow.width > canvas.width ||
      pow.position.y - pow.height > canvas.height ||
      pow.position.y + pow.height < 0
    ) {
      powerup.splice(i, 1);
    }
  }

  player.velocity = { x: 0, y: 0 };
  //controll managment
  if (keys.down.pressed) {
    player.velocity.y += SPEED;
  } else if (keys.up.pressed) {
    //console.log("pressed up");
    player.velocity.y -= SPEED;
    // player.velocity.x = Math.cos(player.rotation) * SPEED;
    //player.velocity.y = Math.sin(player.rotation) * SPEED;
  } else {
    player.velocity.y *= FRICTION;
  }

  if (keys.left.pressed) {
    player.velocity.x -= SPEED;
  } else if (keys.right.pressed) {
    player.velocity.x += SPEED;
  } else {
    player.velocity.x *= FRICTION;
  }
}

animate();

window.addEventListener("keydown", (ev) => {
  //console.log(ev.key);
  switch (ev.key) {
    case "p":
      //keys.w.pressed = true;
      //player.lastKey = "w";
      isPaused = !isPaused;
      if (!isPaused) {
        gameMenu.style.display = "none";
        animate();
       // decreaseTimer();
      } else {
        gameMenu.style.display = "block";
        gameMenu.innerHTML = "PAUSED V0.1";
      };
      break;
    case " ":
      if (projectiles.length < 5) {
        projectiles.push(
          new Projectile({
            position: {
              x: player.position.x + 25,
              y: player.position.y - 20,
            },
            velocity: {
              x: 0,
              y: -PROJECT_SPEED,
            },
          })
        );
      }
      //console.log(projectiles);
      break;

    //player keys
    case "ArrowRight":
      keys.right.pressed = true;
      player.lastKey = "ArrowRight";
      break;
    case "ArrowLeft":
      keys.left.pressed = true;
      player.lastKey = "ArrowLeft";
      break;
    case "ArrowUp":
      keys.up.pressed = true;
      player.lastKey = "ArrowUp";

      break;
    case "ArrowDown":
      keys.down.pressed = true;
      player.lastKey = "ArrowDown";
      break;
  }
});

window.addEventListener("keyup", (ev) => {
  //console.log(ev.key);
  switch (ev.key) {
    //player keys
    case "ArrowRight":
      keys.right.pressed = false;
      break;
    case "ArrowLeft":
      keys.left.pressed = false;
      break;
    case "ArrowUp":
      keys.up.pressed = false;
      break;
    case "ArrowDown":
      keys.down.pressed = false;
      break;
  }
});

////controller
const gamepads = {};

function gamepadHandler(event, connected) {
  const gamepad = event.gamepad;
  // Note:
  // gamepad === navigator.getGamepads()[gamepad.index]
  if (connected) {
    gamepads[gamepad.index] = gamepad;
    console.log(gamepads);
  } else {
    delete gamepads[gamepad.index];
  }
}

window.addEventListener(
  "gamepadconnected",
  (e) => {
    gamepadHandler(e, true);
    console.log(
      "Gamepad connected at index %d: %s. %d buttons, %d axes.",
      e.gamepad.index,
      e.gamepad.id,
      e.gamepad.buttons,
      e.gamepad.axes.length
    );
    console.log(navigator.getGamepads()[0]);
    controllerEnabled = true;
    //gameLoop();
  },
  false
);

window.addEventListener(
  "gamepaddisconnected",
  (e) => {
    gamepadHandler(e, false);
    controllerEnabled = false;
  },
  false
);

function controllerMapping() {
  const gp = navigator.getGamepads()[0];

  let a = 0;
  let b = 0;

  if (gp.buttons[0].value > 0 || gp.buttons[0].pressed) {
    //console.log("x pressed");
    if(canFire){
      if (projectiles.length < 10) {
        projectiles.push(
          new Projectile({
            position: {
              x: player.position.x + 25,
              y: player.position.y - 20,
            },
            velocity: {
              x: 0,
              y: -PROJECT_SPEED,
            },
          })
        );
        canFire = false;
      }
      
      setTimeout(() => {
        canFire = true
      }, 500);

    }
    
  }
  /*else if (gp.buttons[1].value > 0 || gp.buttons[1].pressed) {
        console.log("circle")
    } else if (gp.buttons[2].value > 0 || gp.buttons[2].pressed) {
        console.log("square")
    } else if (gp.buttons[3].value > 0 || gp.buttons[3].pressed) {
        console.log("triangle");
    }*/
  keys.down.pressed = false;
  keys.up.pressed = false;
  keys.left.pressed = false;
  keys.right.pressed = false;
  if (gp.buttons[15].value > 0 || gp.buttons[15].pressed) {
    keys.right.pressed = true;
    //console.log("right")
  } else if (gp.buttons[14].value > 0 || gp.buttons[14].pressed) {
    keys.left.pressed = true;
    //console.log("left");
  } else if (gp.buttons[12].value > 0 || gp.buttons[12].pressed) {
    //console.log("up");
    keys.up.pressed = true;
  } else if (gp.buttons[13].value > 0 || gp.buttons[13].pressed) {
    //console.log("down");
    keys.down.pressed = true;
  }

  //console.log(gp.axes);

  //requestAnimationFrame(gameLoop);
}
