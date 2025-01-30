

/*  -----------------------shopping----------------------------- */

let deleteBtns = document.querySelectorAll(".cart__item__delete")

/* --------------cart elemnts----------------------------------- */
let addToTheCartBtn = document.querySelectorAll(".purchase__btn")

let itemAdded = document.querySelector(".cart__new__item")

/* --------------------------Buy----------------------------------- */

let buy = document.querySelector(".buyCart")
 /* --------------------------------------------------------------- */


deleteBtns.forEach(Btn => {
    Btn.addEventListener("click", function(event){
        event.target.parentElement.parentElement.remove(); // here there are two parentElement, because the with one, it just deletes the button itselft
        showCart.innerHTML = '<a class="show__cart">My Shopping Cart</a>'
       
    })
})



function itemClicked (){
    
    addToTheCartBtn.forEach(addBtn =>  {
        addBtn.addEventListener("click", function(event){
            let button = event.target
            let newItem = button.parentElement.parentElement
            let itemImgSrc = newItem.querySelector("img").src
            let iteminfo = newItem.querySelector("p").textContent
            let itemPrice = newItem.querySelector("span").textContent
            let itemAlt = newItem.querySelector("img").alt
            console.log(itemAlt);
            

    
            showCart.innerHTML= '<button class="show__cart my__account__button">My Shopping Cart <span class="notification"><i class="fa-solid fa-bell fa-shake" style="color: #fb98f3;"></i></span></button>'

            alert("Check Your Cart")


            function addItemToTheCart (){
                //console.log(itemAdded);
                
                itemAdded.innerHTML += '<section class="cart__item"><div class="cart__item__img"><img class="image" src="'+itemImgSrc+'" alt="'+itemAlt+'"></div><p class="cart__item__description">'+iteminfo+'</p><span class="cart__item__price">'+itemPrice+'</span><button class="cart__item__delete"><i class="fa-solid fa-trash-can"></i></button> </section>'

                itemAdded.addEventListener("click", function(event){
                    //console.log(event.target.parentElement);

                let deleteElm = itemAdded.querySelector(".cart__item__delete")

                    if(event.target.parentElement === deleteElm){
                        //console.log("hello");
                       event.target.parentElement.parentElement.remove()
                    }
                    // My code woks only if I start to delete from top to bottom. Im not sure why ????? :(
                })
               
                
            }
         
            //console.log(itemPrice,iteminfo,itemImgSrc,newItem);

                addItemToTheCart ()

        })
    })
    
}


itemClicked ()
           
