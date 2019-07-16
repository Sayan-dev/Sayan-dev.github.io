// ES-6 code for the pig game
//Rules
/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores,roundScore,activePlayer,gamePlay;



//specifying the ids and classes
const DOMselector=new Map();
//classes
DOMselector.set(".dice",document.querySelector(".dice"));
DOMselector.set(".btn-roll",document.querySelector(".btn-roll"));
DOMselector.set(".btn-hold",document.querySelector(".btn-hold"));
DOMselector.set(".btn-new",document.querySelector(".btn-new"));
DOMselector.set(".player-panel-0",document.querySelector(".player-panel-0"));
DOMselector.set(".player-panel-1",document.querySelector(".player-panel-1"));
DOMselector.set(".final-score",document.querySelector(".final-score"));

//ids
DOMselector.set("score-0",document.getElementById("score-0"));
DOMselector.set("score-1",document.getElementById("score-1"));
DOMselector.set("current-0",document.getElementById("current-0"));
DOMselector.set("current-1",document.getElementById("current-1"));
DOMselector.set("name-0",document.getElementById("name-0"));
DOMselector.set("name-1",document.getElementById("name-1"));


const ids=["score-0","score-1","current-0","current-1"];
const clases=[".player-panel-0",".player-panel-1"];



//App controller
init();


DOMselector.get(".btn-roll").addEventListener("click",()=>{
    //Random Number
   if(gamePlay)
    { const dice=Math.floor((Math.random() * 6) + 1);

    //Display the result
    const diceDOM=DOMselector.get(".dice");
    diceDOM.style.display="block";
    diceDOM.src=`./img/dice-${dice}.png`;


    //Update round score if dice is not 1
    if(dice!==1){
        roundScore+=dice;
        DOMselector.get(`current-${activePlayer}`).textContent=roundScore;
    }
    else{
        //Change control to other player
        nextPlayer();
    }};
});

DOMselector.get(".btn-hold").addEventListener("click",()=>{
    if(gamePlay)
    {
        //updating the player score in the scores[player1,player2] array
        scores[activePlayer]+=roundScore;

        //Displaying the player score in the UI
        DOMselector.get(`score-${activePlayer}`).textContent=scores[activePlayer];

        //Taking the final scopre input
        const input = DOMselector.get(".final-score").value;
        let winningScore;
        
        
        if(input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }
        // Undefined, 0, null or "" are COERCED to false
        // Anything else is COERCED to true
        
        if(scores[activePlayer]>=winningScore){
            DOMselector.get(`name-${activePlayer}`).textContent="Winner!!";
            DOMselector.get(".dice").style.display="none";
            DOMselector.get(`.player-panel-${activePlayer}` ).classList.add('winner');
            DOMselector.get(`.player-panel-${activePlayer}` ).classList.remove('active');
            gamePlay=false;
        }
        else{
            //Change control to the new player
            nextPlayer();
        }
    }
});


//Everything will be set to 0 and ready for another game
DOMselector.get(".btn-new").addEventListener("click",init);


//To change the player control
const nextPlayer=()=>{
    if(gamePlay)
    {
        //it decides whether player 0 is active or player 1
        activePlayer=activePlayer===0?1:0;
        roundScore=0;
        //hides the dice
        DOMselector.get(".dice").style.display="none";
        //accessing the elements from the ids array
        for(id=2;id<4;id++){
            DOMselector.get(ids[id]).textContent="0";
        };

        //accessing all elements from the clases array
        clases.forEach(el=>{
            DOMselector.get(el).classList.toggle("active");
        });
}
};







function init(){
    scores=[0,0];
    roundScore=0;
    activePlayer=0;
    gamePlay=true;


    DOMselector.get(".dice").style.display="none";

     //accessing all elements from the ids array
    ids.forEach(element=>{
        DOMselector.get(element).textContent="0";
    });


    DOMselector.get("name-0").textContent="Player 1";
    DOMselector.get("name-1").textContent="Player 2";

     //accessing all elements from the clases array
    clases.forEach(elem=>{
        DOMselector.get(elem).classList.remove("winner");
        DOMselector.get(elem).classList.remove("active");

    });


    DOMselector.get(".player-panel-0").classList.add("active");

};