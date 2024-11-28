let player_score = 0;
let computer_score = 0;

const emojis = {
    'rock': '👊',
    'paper': '✋',
    'scissors': '✌️'
};

function updateHands(player, computer) {
    document.getElementById('player-play').textContent = emojis[player];
    document.getElementById('computer-play').textContent = emojis[computer];
    document.getElementById('playDiv').style.opacity = 1;
}

function Score(playerScore, computerScore) {
    document.getElementById('player-score').innerText = playerScore;
    document.getElementById('computer-score').innerText = computerScore;
}

function updateScore(player, computer) {
    document.getElementById('display').style.opacity = 1;

    if (player === computer) {
        document.getElementById("display-result").textContent = `It's a draw! Both chose ${player}`;
        return;
    }

    const winConditions = {
        'rock': 'scissors',
        'scissors': 'paper',
        'paper': 'rock'
    };

    if (winConditions[player] === computer) {
        player_score++;
        Score(player_score, computer_score);
        document.getElementById("display-result").textContent = `You win! ${player} beats ${computer}`;
    } else {
        computer_score++;
        Score(player_score, computer_score);
        document.getElementById("display-result").textContent = `You lose! ${computer} beats ${player}`;
    }
}

function computerchoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function playGame(option) {
    const array = ["rock", "paper", "scissors"];
    const computer_hand = computerchoice(array);
    updateHands(option, computer_hand);
    updateScore(option, computer_hand);
}

function restart() {
    player_score = 0;
    computer_score = 0;
    Score(player_score, computer_score);
    document.getElementById("display-result").textContent = 'Choose an option to start';
    document.getElementById('player-play').textContent = '👊';
    document.getElementById('computer-play').textContent = '👊';
    document.getElementById('display').style.opacity = 0;
    document.getElementById('playDiv').style.opacity = 0;
}
