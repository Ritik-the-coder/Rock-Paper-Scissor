
const userpick = {

    'rock':'icon-rock.svg',
    'paper':'icon-paper.svg',
    'scissors':'icon-scissors.svg'

}

let SCORE = 0;
function user(hand){
    
    document.getElementById('content').style.display = 'none';
    
    document.getElementById('contest').style.display = 'flex';

    document.getElementById("userpickimg").src = userpick[hand];


    let cphand = computer();

    referee(hand , cphand);
}

function computer(){
    
    const comp = ['rock','paper','scissors'];
    let cphand = comp[Math.floor(Math.random()*3)];
    document.getElementById("computerpickimg").src = userpick[cphand];

    return cphand;
    
}

function referee(userhand , cphand){

    if (userhand == 'rock' && cphand == 'paper') {
        setdecision("YOU LOSE!");
    }
    else if (userhand == 'rock' && cphand == 'scissors') {
        setdecision("YOU WON");
        setscore(SCORE + 1);
    }
    else if (userhand == 'paper' && cphand == 'rock') {
        setdecision("YOU WON");
        setscore(SCORE + 1);
    }
    else if (userhand == 'paper' && cphand == 'scissors') {
        setdecision("YOU LOSE!");
    }
    else if (userhand == 'scissors' && cphand == 'rock') {
        setdecision("YOU LOSE!");
    }
    else if (userhand == 'scissors' && cphand == 'paper') {
        setdecision("YOU WON");
        setscore(SCORE + 1);
    }
    else if (userhand == cphand) {
        setdecision("IT'S A TIE!");
    }
    else{
        setdecision("Error");
    }
}

function setdecision(decision){

    document.getElementById("result").innerHTML = decision;
}

function setscore(score){
    SCORE = score;
    document.getElementById("score").innerHTML = score;
}

function newgame(){

    document.getElementById('content').style.display = 'flex';
    document.getElementById('contest').style.display = 'none';
    

}