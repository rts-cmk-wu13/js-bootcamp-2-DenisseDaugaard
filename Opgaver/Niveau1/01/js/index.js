let colofulBtn = document.querySelector("#my-button")
let   i = 0
let colors =[" rgb(198, 163, 230)"," rgb(108, 155, 13)"]


function showColor (){
   
   colofulBtn.addEventListener("click", function(event){
      
      if (event.target){
         colofulBtn.style.backgroundColor = colors[i % colors.length] 
         //(%) its a modulo operator the makes sure you stay within the array length
         console.log(colors[i % colors.length]);
           
         } i++
      
   })
   
}
showColor ()
   
