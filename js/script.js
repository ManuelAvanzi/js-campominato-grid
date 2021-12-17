//creo le varibili dei pulsanti
const btn1=document.getElementById("btn1");
const btn2=document.getElementById("btn2");
const btn3=document.getElementById("btn3");
const gridContainer=document.querySelector(".gridcontainer");

btn1.addEventListener("click",function(){
    drawGrid(100,"easy");
});
btn2.addEventListener("click",function(){
    drawGrid(81,"medium");
})
btn3.addEventListener("click",function(){
    drawGrid(49,"hard");
})


function drawGrid(num,difficulty){

    for(let i=0;i<num;i++){
      
        //creo la box
        const newSquare=document.createElement('div');
        //applico alla box lo stile di default 
        newSquare.className="box";
        //aggiungo alla box lo stile contenuto nella variabilie difficulty
        newSquare.classList.add(difficulty);
        // appendo tutto 
        gridContainer.append(newSquare)

    }
}