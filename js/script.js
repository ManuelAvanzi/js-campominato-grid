function getRandomNumber(min, max){
    return Math.round(Math.random() * (max - min)) + min;
}
function reset(){
    gridContainer.innerHTML='';
}
function createBombs(maxCells){
    const listBombs=[];
    while(listBombs.length < 16){
        const n=getRandomNumber(1, maxCells);
        if(!listBombs.includes(n)){
            listBombs.push(n);
        }
    }
    
    return listBombs;
}

function gameOver(isWin, score, gridContainer){
    const modal=document.createElement('div');
    modal.className='game-over';

    if(isWin){
        modal.classList.add('winner');
        modal.innerText='Hai vinto! ';
    }else{
        modal.classList.add('loser');
        modal.innerText='Hai perso! ';
    }

    modal.innerText +=`score : ${score}`

    const button=document.createElement('button');
    button.innerText='ricomincia';
    button.classList.add('restart');

    button.addEventListener("click",reset);
    modal.append(button);

    gridContainer.append(modal);
    
}

function game(maxCells, gridContainer, createBombsFunction){ 

    let clicked=0;
    const bombs=createBombsFunction(maxCells);
    console.log(bombs);

    for(let i=1;i<=maxCells;i++){
        const cell=document.createElement('div');
        cell.className='cell';
        cell.innerText= i;
        gridContainer.append(cell);

        cell.addEventListener("click",function(){

           if(bombs.includes(i)){
               cell.classList.add('red');
               gameOver(false,clicked,gridContainer);
           }else{
               cell.classList.add('on');
               clicked++;

               //condizione di vittoria 
               if(clicked === maxCells - 16){
                   gameOver(true,clicked,gridContainer);
               }
           }

        });
    }
}


//creo le varibili dei pulsanti
const btn1=document.getElementById("btn1");
const btn2=document.getElementById("btn2");
const btn3=document.getElementById("btn3");

const gridContainer=document.getElementById("gridcontainer");


btn1.addEventListener("click",function(){ 
    gridContainer.className ='livello-1';
    reset();
    game(100, gridContainer, createBombs);
})


btn2.addEventListener("click",function(){ 
    gridContainer.className ='livello-2';
    reset();
    game(81, gridContainer, createBombs);
})

  
btn3.addEventListener("click",function(){   
    gridContainer.className ='livello-3';
    reset();
    game(49, gridContainer, createBombs);
})
  


