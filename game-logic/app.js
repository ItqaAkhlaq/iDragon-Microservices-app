let score = 0;
let cross = true;
let gameOverState = false;


go = new Audio('gameover.mp3');
setTimeout(() => {
    music.play()
}, 1000);

function jump() {
    let dino = document.getElementById('Dino');
    dino.classList.add('animateDino');
    setTimeout(() => {
        dino.classList.remove('animateDino');
    }, 1000);
}

document.addEventListener('touchstart', jump);
document.addEventListener('click', jump);

function resetGame() {
    gameOverState = false;
    score = 0;
    cross = true;

    let obstacle = document.getElementById('obstacle');
    obstacle.style.left = '100%'; // Reset obstacle position
    obstacle.classList.add('obsAni'); // Re-apply animation
    
    document.getElementById('gameover').style.visibility = 'hidden';
    updateScore(score); // Reset the score display
}

setInterval(() => {
    let dino = document.getElementById('Dino');
    let gameOver = document.getElementById('gameover');
    let obstacle = document.getElementById('obstacle');

    let dinoRect = dino.getBoundingClientRect();
    let obstacleRect = obstacle.getBoundingClientRect();

    if (dinoRect.left < obstacleRect.left + obstacleRect.width && dinoRect.left + dinoRect.width > obstacleRect.left && dinoRect.top < obstacleRect.top + obstacleRect.height && dinoRect.height + dinoRect.top > obstacleRect.top) {
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('obsAni'); // Stop the obstacle
        go.play() // gameover audio 
        setTimeout(()=>{
            go.pause()
        }, 1000);
        setTimeout(resetGame, 2000); // Reset game after 2 seconds
    }
    else if (cross && obstacleRect.left < dinoRect.right) {
        score += 1;
        updateScore(score);
        cross = false;

        setTimeout(() => {
            cross = true;
        }, 1000);
    }
}, 100);

function updateScore(score) {
    document.getElementById('scoreCont').innerHTML = "Your Score: " + score;
}


app.listen(3001, () => console.log('Game Logic Service running on port 3001'));
