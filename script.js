const playerText= document.getElementById("playerText");

// playerText.style.color='black';

const btn=document.getElementById("restartbtn");

const boxes=Array.from(document.getElementsByClassName('box'));

const X_text='X';
const O_text='O';

let filled =Array(9).fill(null);

let currentPlayer=X_text;

const startGame=()=>{
    boxes.forEach(box => box.addEventListener('click',boxClicked))
}

let gameOver=false;

function boxClicked(e){
    const id=e.target.id;

    if(!filled[id] && !gameOver){
        filled[id]=currentPlayer;
        e.target.innerText = currentPlayer;

        if(playerWon()){
            let winning_blocks= playerWon();
    
            winning_blocks.map(block =>{
                boxes[block].style.backgroundColor='#ac9d1b70';
                playerText.innerHTML=`${currentPlayer} has won`;
                gameOver=true;
                
            })
            return;
        }

        currentPlayer=(currentPlayer==X_text)? O_text: X_text;
    }

    if(gameOver) return;

    
}
const won=[
    [0,1,2] , [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8],[2,4,6]
]
function playerWon(){
    for(const condition of won){
        let [a,b,c]=condition;
        // console.log(a,b,c);
        // console.log(filled[a],filled[b],filled[c]);

        if(filled[a] &&(filled[a]==filled[b] && filled[a] == filled[c])){
            return [a,b,c];
            console.log("yes ,,,,,,,,,,,,");
        }

       
    }
    // console.log("complete")
    // console.log("");
    return false;
}




btn.addEventListener('click', restart);

function restart(){
    filled.fill(null);
    
    boxes.forEach(box =>{
        box.innerText='';
    })

    currentPlayer=X_text;

    boxes.forEach(box =>{
        box.style.backgroundColor="rgb(153, 176, 176)";
    })
    gameOver=false
    playerText.innerHTML="TIC TAC TOE";
}

startGame()