let plusBtns = document.querySelectorAll(".item__plus__btn")
let minusBtns = document.querySelectorAll(".item__minus__btn")


plusBtns.forEach( plusBtnElm=> {
    plusBtnElm.addEventListener("click", function(event){
        if (event.target){
            console.log(event.target.nextElementSibling)
            let inputAmount = event.target.nextElementSibling
            inputAmount.value = parseInt(inputAmount.value) + 1;
        }
     
    })
});

minusBtns.forEach(minusBtnElmt => {
    minusBtnElmt.addEventListener("click", function(event){
        if(event.target){

            console.log(event.target.previousElementSibling)
            let inputAmount = event.target.previousElementSibling
            
            if(parseInt(inputAmount.value) > 0){
                inputAmount.value = parseInt(inputAmount.value) -1 
            }
        }

    })
});
