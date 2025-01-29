
function skjulElementViaCssSelector (cssSelector){
    // cssSelector its just a name that makes sense for this task
    console.log(cssSelector);
    document.querySelector(cssSelector).style.display = "none"

    skjulElement(".strand__billede")
}

// skjulElementViaCssSelector(".strand__billede") //this argument is the one that 
//                                                // should find a css selector named ".strand__billede"
//                                                //i can undestend that my parameter = augument


function skjulElement (element){
   
    if (element != null){
        console.log(element);
        document.querySelector(element).style.display = "none"
    }
}
