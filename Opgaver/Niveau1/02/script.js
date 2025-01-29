let showResult = document.querySelector(".result")
let showResult2 = document.querySelector(".result2")

function div(a,b){

    return a/b;//scop variavble
}
let outerResult = div(4,3)
console.log(outerResult);


/* -------------begregne Forhold 2---------------- */

showResult.textContent = outerResult
function begregneForhold2 (a,b){

    return a/b;//scop variavble
}
let outerResult2 = begregneForhold2(4,0)
console.log(outerResult2);


showResult2.textContent = outerResult2
