//creo le varibili dei pulsanti
const btn1=document.getElementById("btn1");
const btn2=document.getElementById("btn2");
const btn3=document.getElementById("btn3");
const gridContainer=document.querySelector(".gridcontainer");

btn1.addEventListener("click",function(){
    drawGrid(100);
});
btn2.addEventListener("click",function(){
    drawGrid(81);
})
btn3.addEventListener("click",function(){
    drawGrid(49);
})


function drawGrid(num){

    for(let i=0;i<num;i++){
        
        const newSquare=document.createElement('div');
        newSquare.className="box";

        if(num>=49){
            newSquare.className="medium";
        }else if(num>=81){
            newSquare.className="hard";
        }
        
        gridContainer.append(newSquare);

    }
}