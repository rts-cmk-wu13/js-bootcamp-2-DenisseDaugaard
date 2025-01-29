
function skjulElementViaCssSelector (cssSelector){
    // cssSelector its just a name that makes sense for this task
    console.log(cssSelector);
    document.querySelector(cssSelector).style.display = "none"
}

skjulElementViaCssSelector(".strand__billede") //this argument is the one that 
                                               // should find a css selector named ".strand__billede"
                                               //i can undestend that my parameter = augument