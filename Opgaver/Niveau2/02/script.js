let plusBtns = document.querySelectorAll(".item__plus__btn")
let minusBtns = document.querySelectorAll(".item__minus__btn")



plusBtns.forEach( plusBtnElm=> {
    plusBtnElm.addEventListener("click", function(event){
        if (event.target){
            //console.log(event.target.nextElementSibling)
            let inputAmount = event.target.nextElementSibling
            inputAmount.value = parseInt(inputAmount.value) + 1;


                //console.log(event.target.closest(".shop__item__description").querySelector(".price").textContent);
            let price = event.target.closest(".shop__item__description").querySelector(".item__price").textContent

            //console.log(parseFloat(price.replace("kr", "")));
            let total = parseInt(parseFloat(price.replace("kr", "")))
            //console.log(Boolean(isNaN(total)))
            
            //console.log(total*inputAmount.value);
            //console.log(event.target.closest(".shop__item__description").querySelector(".total").textContent);
            let totalPrice = event.target.closest(".shop__item__description").querySelector(".total")
            
            totalPrice.innerHTML = total*inputAmount.value + "kr"
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


                  //console.log(event.target.closest(".shop__item__description").querySelector(".price").textContent);
            let price = event.target.closest(".shop__item__description").querySelector(".item__price").textContent

            //console.log(parseFloat(price.replace("kr", "")));
            let total = parseInt(parseFloat(price.replace("kr", "")))
            //console.log(Boolean(isNaN(total)))
            
            //console.log(total*inputAmount.value);
            //console.log(event.target.closest(".shop__item__description").querySelector(".total").textContent);
            let totalPrice = event.target.closest(".shop__item__description").querySelector(".total")
            
            totalPrice.innerHTML = total*inputAmount.value + "kr"
             
            }
        }

    })
});


