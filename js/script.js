
function game(maxCells, levelName){
   
    const gridContainer=document.getElementById("gridcontainer");

 
    gridContainer.className = levelName;
    gridContainer.innerHTML = '';

    for(let i=1;i<=maxCells;i++){

        const cell=document.createElement('div');
        cell.className='cell';
        cell.innerText= i;
        gridContainer.append(cell);
    }
}


//creo le varibili dei pulsanti
const btn1=document.getElementById("btn1");
const btn2=document.getElementById("btn2");
const btn3=document.getElementById("btn3");



btn1.addEventListener("click",function(){
  game(100, 'livello-1');
})


btn2.addEventListener("click",function(){
    game(81, 'livello-2');
})

  
btn3.addEventListener("click",function(){
    game(49, 'livello-3');
})
  


