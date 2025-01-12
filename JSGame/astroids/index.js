const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 800; //window.innerWidth;
canvas.height = 600; //window.innerHeight;

//console.log(c);

///classes
class Player {
  constructor({ position, velocity }) {
    this.position = position; //{x, y}
    this.velocity = velocity;
    this.rotation = 0;
  }

  draw() {
    //c.fillStyle = 'red'
    //c.fillRect(this.position.x, this.position.y ,100, 100)

    c.save();
    c.translate(this.position.x, this.position.y);
    c.rotate(this.rotation);
    c.translate(-this.position.x, -this.position.y);

    c.beginPath();
    c.arc(this.position.x, this.position.y, 5, 0, Math.PI * 2, false);
    c.fillStyle = "red";
    c.fill();
    c.closePath();

    c.beginPath();
    c.moveTo(this.position.x + 30, this.position.y);
    c.lineTo(this.position.x - 10, this.position.y - 10);
    c.lineTo(this.position.x - 10, this.position.y + 10);
    c.closePath();

    c.strokeStyle = "white";
    c.stroke();
    c.restore();
  }

  update() {
    this.draw();
    if(this.position.y < 10){
      this.position.y = 15;
    }else if(this.position.x < 10){
      this.position.x = 15;
    }else if(this.position.y > canvas.height - 10){
      this.position.y =  canvas.height - 15;
    }else if(this.position.x > canvas.width - 10){
      this.position.x =  canvas.width - 15;
    }
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }

  getVertices() {
    const cos = Math.cos(this.rotation);
    const sin = Math.sin(this.rotation);

    return [
      {
        x: this.position.x + cos * 30 - sin * 0,
        y: this.position.y + sin * 30 + cos * 0,
      },
      {
        x: this.position.x + cos * -10 - sin * 10,
        y: this.position.y + sin * -10 + cos * 10,
      },
      {
        x: this.position.x + cos * -10 - sin * -10,
        y: this.position.y + sin * -10 + cos * -10,
      },
    ];
  }
}

class Projetile {
  constructor({ position, velocity }) {
    this.position = position;
    this.velocity = velocity;
    this.radius = 5;
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

class Asteroid {
  constructor({ position, velocity, radius }) {
    this.position = position;
    this.velocity = velocity;
    this.radius = radius;
  }

  draw() {
    c.beginPath();
    c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false);
    c.closePath();
    c.strokeStyle = "white";
    c.stroke();
  }

  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}

//constants
const SPEED = 2;
const ROTATIONAL_SPEED = 0.05;
const FRICTION = 0.97;
const PROJECT_SPEED = 3;
let can_fire = true;

const projectiles = [];
const asteroids = [];
let gameScore = document.querySelector("#gameScore");
let score = 0;
let isPaused = false;
let isGameOver = false;
let gameMenu = document.querySelector("#gameMenu");

let gameTimer = document.querySelector("#gameTimer");
let timer = 30;
let timerId;

let controllerEnabled = false;

function decreaseTimer() {
  if (isPaused) return;
  //console.log("decrese time");
  if (timer > 0) {
    timerId = setTimeout(decreaseTimer, 1000);
    timer--;
    //console.log(timer)
    gameTimer.innerHTML = `Timer: ${timer}`;
  }

  if (timer === 0) {
    isPaused = true;
    isGameOver = true;
    gameMenu.style.display = "block";
    gameMenu.style.left = '275px';
    gameMenu.innerHTML = "GAME OVER!";
    window.clearInterval(intervalId);
  }
}

const intervalId = window.setInterval(() => {
  const index = Math.floor(Math.random() * 4);
  let x, y;
  let vx, vy;
  let radius = 50 * Math.random() + 10;

  switch (index) {
    case 0: //left side of screen
      x = 0 - radius;
      y = Math.random() * canvas.height;
      vx = 1;
      vy = 0;
      // console.log("case 0")
      break;
    case 1: //bottome of screeen
      x = Math.random() * canvas.width;
      y = canvas.height + radius;
      vx = 0;
      vy = -1;
      break;
    case 2: //right side of screeen
      x = canvas.width + radius;
      y = Math.random() * canvas.height;
      vx = -1;
      vy = 0;
      break;
    case 3: //top of screeen
      x = Math.random() * canvas.width;
      y = 0 - radius;
      vx = 0;
      vy = 1;
      break;
  }

  asteroids.push(
    new Asteroid({
      position: {
        x: x,
        y: y,
      },
      velocity: {
        x: vx,
        y: vy,
      },
      radius,
    })
  );
  //console.log(asteroids);
}, 2000);

///functions

function circleCollision(circle1, circle2) {
  const xDifference = circle2.position.x - circle1.position.x;
  const yDifference = circle2.position.y - circle1.position.y;

  const distance = Math.sqrt(
    xDifference * xDifference + yDifference * yDifference
  );

  if (distance <= circle1.radius + circle2.radius) {
    //console.log("circles have collided");
    return true;
  }

  return false;
}

function circleTriangleCollision(circle, triangle) {
  // Check if the circle is colliding with any of the triangle's edges
  for (let i = 0; i < 3; i++) {
    let start = triangle[i];
    let end = triangle[(i + 1) % 3];

    let dx = end.x - start.x;
    let dy = end.y - start.y;
    let length = Math.sqrt(dx * dx + dy * dy);

    let dot =
      ((circle.position.x - start.x) * dx +
        (circle.position.y - start.y) * dy) /
      Math.pow(length, 2);

    let closestX = start.x + dot * dx;
    let closestY = start.y + dot * dy;

    if (!isPointOnLineSegment(closestX, closestY, start, end)) {
      closestX = closestX < start.x ? start.x : end.x;
      closestY = closestY < start.y ? start.y : end.y;
    }

    dx = closestX - circle.position.x;
    dy = closestY - circle.position.y;

    let distance = Math.sqrt(dx * dx + dy * dy);

    if (distance <= circle.radius) {
      return true;
    }
  }

  // No collision
  return false;
}

function isPointOnLineSegment(x, y, start, end) {
  return (
    x >= Math.min(start.x, end.x) &&
    x <= Math.max(start.x, end.x) &&
    y >= Math.min(start.y, end.y) &&
    y <= Math.max(start.y, end.y)
  );
}

decreaseTimer();
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
  gameScore.innerHTML = `Score: ${score}`;

  //Projectile managment
  for (let i = projectiles.length - 1; i >= 0; i--) {
    const projectile = projectiles[i];
    projectile.update();

    //projectile garbage collection
    if (
      projectile.position.x + projectile.radius < 0 ||
      projectile.position.x - projectile.radius > canvas.width ||
      projectile.position.y - projectile.radius > canvas.height ||
      projectile.position.y + projectile.radius < 0
    ) {
      projectiles.splice(i, 1);
    }
  }

  //Asteroid managment
  for (let i = asteroids.length - 1; i >= 0; i--) {
    const asteroid = asteroids[i];
    asteroid.update();

    //
    if (circleTriangleCollision(asteroid, player.getVertices())) {
      console.log("Game Over");
      //window.cancelAnimationFrame(animationId);
      isPaused = true;
      isGameOver = true;
      gameMenu.style.display = "block";
      gameMenu.style.left = "275px";
      gameMenu.innerHTML = "GAME OVER!";
      window.clearInterval(intervalId);
    }

    //Asteroid garbage collection
    if (
      asteroid.position.x + asteroid.radius < 0 ||
      asteroid.position.x - asteroid.radius > canvas.width ||
      asteroid.position.y - asteroid.radius > canvas.height ||
      asteroid.position.y + asteroid.radius < 0
    ) {
      asteroids.splice(i, 1);
    }

    //astroid collision
    for (let j = asteroids.length - 1; j >= 0; j--) {
      const collideAsteroid = asteroids[j];
      if (collideAsteroid !== asteroid) {
        //console.log("not target astroid");
        if (circleCollision(asteroid, collideAsteroid)) {
          //console.log("astroids collid");
          collideAsteroid.velocity.x = -collideAsteroid.velocity.x;
          collideAsteroid.velocity.y = -collideAsteroid.velocity.y;
        }
      }
    }

    //projectile collision
    for (let j = projectiles.length - 1; j >= 0; j--) {
      const projectile = projectiles[j];
      if (circleCollision(asteroid, projectile)) {
        //console.log('Big Success')
        asteroids.splice(i, 1);
        projectiles.splice(j, 1);
        score++;

        if (asteroid.radius > 25) {
          //  asteroids.splice(i, 1);
          // projectiles.splice(j, 1);
          asteroids.push(
            new Asteroid({
              position: {
                x: asteroid.position.x + 20,
                y: asteroid.position.y + 20,
              },
              velocity: {
                x: -asteroid.velocity.x,
                y: asteroid.velocity.y,
              },
              radius: Math.floor(asteroid.radius / 2),
            })
          );
          asteroids.push(
            new Asteroid({
              position: {
                x: asteroid.position.x - 20,
                y: asteroid.position.y - 20,
              },
              velocity: {
                x: asteroid.velocity.x,
                y: -asteroid.velocity.y,
              },
              radius: Math.floor(asteroid.radius / 2),
            })
          );
        }
      }
    }
  }

  //controll managment
  if (keys.w.pressed) {
    // player.velocity.x = 1;
    player.velocity.x = Math.cos(player.rotation) * SPEED;
    player.velocity.y = Math.sin(player.rotation) * SPEED;
  } else if (!keys.w.pressed) {
    player.velocity.x *= FRICTION;
    player.velocity.y *= FRICTION;
  }

  if (keys.d.pressed) {
    player.rotation += ROTATIONAL_SPEED;
  } else if (keys.a.pressed) {
    player.rotation -= ROTATIONAL_SPEED;
  }
}

const keys = {
  w: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
  space: {
    pressed: false,
  },
};

///instantiated objects
const player = new Player({
  position: { x: canvas.width / 2, y: canvas.height / 2 },
  velocity: { x: 0, y: 0 },
});

animate();

//console.log(player);

window.addEventListener("keydown", (e) => {
  //console.log(e.code);
  switch (e.code) {
    case "KeyW":
      keys.w.pressed = true;
      //console.log("ArrowUp pressed");
      break;
    case "ArrowUp":
      keys.w.pressed = true;
      //console.log("ArrowUp pressed");
      break;
    case "KeyA":
      //console.log("A was pressed");
      keys.a.pressed = true;
      break;
    case "ArrowLeft":
      //console.log("A was pressed");
      keys.a.pressed = true;
      break;
    case "KeyD":
      //console.log("D was pressed");
      keys.d.pressed = true;
      break;
    case "ArrowRight":
      //console.log("D was pressed");
      keys.d.pressed = true;
      break;
    case "KeyP":
      if (!isGameOver) {
        isPaused = !isPaused;
        if (!isPaused) {
          gameMenu.style.display = "none";
          animate();
          decreaseTimer();
        } else {
          gameMenu.style.display = "block";
          gameMenu.innerHTML = "PAUSED";
        }
        //console.log("paused = ", isPaused);
      }else{
          window.location.reload();
      }
      break;
    case "Space":
      if (isGameOver) {
      
      } else {
        projectiles.push(
          new Projetile({
            position: {
              x: player.position.x + Math.cos(player.rotation) * 30,
              y: player.position.y + Math.sin(player.rotation) * 30,
            },
            velocity: {
              x: Math.cos(player.rotation) * PROJECT_SPEED,
              y: Math.sin(player.rotation) * PROJECT_SPEED,
            },
          })
        );
        console.log(projectiles);
      }
      break;
  }
});

window.addEventListener("keyup", (e) => {
  switch (e.code) {
    case "KeyW":
      //console.log("w was pressed");
      keys.w.pressed = false;
      break;
    case "ArrowUp":
      //console.log("w was pressed");
      keys.w.pressed = false;
      break;
    case "KeyA":
      //console.log("A was pressed");
      keys.a.pressed = false;
      break;
    case "ArrowLeft":
      //console.log("A was pressed");
      keys.a.pressed = false;
      break;
    case "KeyD":
      //console.log("D was pressed");
      keys.d.pressed = false;
      break;
    case "ArrowRight":
      //console.log("D was pressed");
      keys.d.pressed = false;
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
    if (can_fire) {
      if (isGameOver) {
       // window.location.reload();
      } else {
        projectiles.push(
          new Projetile({
            position: {
              x: player.position.x + Math.cos(player.rotation) * 30,
              y: player.position.y + Math.sin(player.rotation) * 30,
            },
            velocity: {
              x: Math.cos(player.rotation) * PROJECT_SPEED,
              y: Math.sin(player.rotation) * PROJECT_SPEED,
            },
          })
        );
        console.log(projectiles);
        can_fire = false;
        setTimeout(() => {
          can_fire = true;
        }, 100);
      }
    }
  }
  /*else if (gp.buttons[1].value > 0 || gp.buttons[1].pressed) {
        console.log("circle")
    } else if (gp.buttons[2].value > 0 || gp.buttons[2].pressed) {
        console.log("square")
    } else if (gp.buttons[3].value > 0 || gp.buttons[3].pressed) {
        console.log("triangle");
    }*/
  keys.w.pressed = false;
  keys.a.pressed = false;
  keys.d.pressed = false;
  if (gp.buttons[15].value > 0 || gp.buttons[15].pressed) {
    keys.d.pressed = true;
    //console.log("right")
  } else if (gp.buttons[14].value > 0 || gp.buttons[14].pressed) {
    keys.a.pressed = true;
    //console.log("left");
  } else if (gp.buttons[12].value > 0 || gp.buttons[12].pressed) {
    //console.log("up");
    keys.w.pressed = true;
  } else if (gp.buttons[13].value > 0 || gp.buttons[13].pressed) {
    //console.log("down");
  }

  //console.log(gp.axes);

  //requestAnimationFrame(gameLoop);
}
