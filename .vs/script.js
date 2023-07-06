document.addEventListener('DOMContentLoaded', function() {
    const gameBoard = document.getElementById('game-board');
    const scoreDisplay = document.getElementById('score');
    const resetButton = document.getElementById('reset-button');

    let score = 0;
    let bugsCount = 7;
    let bugs = [];
    let interval;

    function createBug() {
        if (bugs.length === 0) {
            for (let i = 0; i < bugsCount; i++) {
                const bug = document.createElement('div');
                bug.className = 'bug';
                bug.style.top = Math.random() * 360 + 'px';
                bug.style.left = Math.random() * 360 + 'px';
                bugs.push(bug);
                gameBoard.appendChild(bug);

                bug.addEventListener('click', function() {
                    bug.style.display = 'none';
                    score++;
                    scoreDisplay.textContent = score;

                    if (score === bugsCount) {
                        clearInterval(interval);
                        alert('Вы поймали всех жуков! Игра окончена.');
                    }
                });
            }
        } else {
            bugs.forEach(function(bug) {
                bug.style.top = Math.random() * 360 + 'px';
                bug.style.left = Math.random() * 360 + 'px';
            });
        }
    }

    function resetGame() {
        score = 0;
        bugsCount = 7;
        bugs = [];
        scoreDisplay.textContent = score;
        gameBoard.innerHTML = '';
        clearInterval(interval);
        interval = setInterval(createBug, 600);
    }

    resetButton.addEventListener('click', resetGame);

    resetGame();
});