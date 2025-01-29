let showResult = document.querySelector(".result")

function div(x,y){

    return x+y;//scop variavble
}
let outerResult = add(3,4)

showResult.textContent = outerResult
