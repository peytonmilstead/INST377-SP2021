document.addEventListener('DOMContentLoaded', () => {
  const bird = document.querySelector('.bird');
  const gameDisplay = document.querySelector('.game-container');
  const ground = document.querySelector('.ground');

  const birdLeft = 220;
  let birdBottom = 100;
  const gravity = 2;

  function startGame() {
    birdBottom -= gravity;
    bird.style.bottom = `${birdBottom}px`;
    bird.style.left = `${birdLeft}px`;
  }
  const timerId = setInterval(startGame, 20);

  function control(e) {
    if (e.keycode === 32) {
      jump();
    }
  }

  function jump() {
    if (birdBottom < 500) birdBottom += 50;
    bird.style.bottom = `${birdBottom}px`;
  }
  document.addEventListener('keyup', control);

  function generateObstacle() {
    let obstacleLeft = 500;
    const randomHeight = Math.random() * 60;
    const obstacleBottom = randomHeight;
    const obstacle = document.createElement('div');
    obstacle.classList.add('obstacle');
    gameDisplay.appendChild(obstacle);
    obstacle.style.left = `${obstacleLeft}px`;
    obstacle.style.bottom = `${obstacleBottom}px`;

    function moveObstacle() {
      obstacleLeft -= 2;
      obstacle.style.left = `${obstacleLeft}px`;
    }
    const timerId = setInterval(moveObstacle, 20);
  }
  generateObstacle();
});