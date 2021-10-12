let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log('secretNumber', secretNumber);
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //when there is no input
    if(!guess) {
      
        displayMessage(' No Number! ');
    } else if(guess === secretNumber){
        displayMessage(' Correct Number! ');
      
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = secretNumber;
    
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    else if(guess > secretNumber){
        if(score >1){
        document.querySelector('.message').textContent = ' Too High' ;
        score--;
        document.querySelector('.score').textContent= score;
    } else{
        document.queryselector('.message').textContent = 'You lost the game';
    }
}
     else if(guess < secretNumber){
        if(score >1){
        document.querySelector('.message').textContent = ' too low';
        score--;
        document.querySelector('.score').textContent = score;
    } else{
        document.queryselector('.message').textContent = 'You lost the game';
    }
}
   
});
document.querySelector('.again').addEventListener('click', function(){
    
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').value = 'Start guessing...';
});