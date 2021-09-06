const search = ()=>{
    const question = document.querySelector("prompt span").textContent;
    window.open("https://www.google.com/search?q="+question)
}

const make = () =>{
    
    const questionNumber = document.querySelector("strong span").textContent.replace("Q","").replace(".","");
    const question = document.querySelector("prompt span").textContent;
    let option = "Nahi mila dhund";
    if(document.querySelectorAll(".option_selected .choice_interaction b").length){
        option = document.querySelectorAll(".option_selected .choice_interaction b")[0].textContent;
    }

    const template = {
        questionNumber : questionNumber,
        questionText : question,
        option : option
    }

   console.log(JSON.stringify(template))
}
