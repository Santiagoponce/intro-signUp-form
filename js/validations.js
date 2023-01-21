const formObject=document.querySelector(".freeTrialForm");
const inputsArray=formObject.querySelectorAll(".freeTrialForm__input");

inputsArray.forEach(element=>
    {
        element.addEventListener("blur",(event)=>
        {
            if(event.target.checkValidity()==false)
            {
                event.target.classList.add("freeTrialForm__input--invalid");
                event.target.parentElement.lastElementChild.classList.remove("hidden");
            }
            
            
            else{
                event.target.classList.remove("freeTrialForm__input--invalid");
                event.target.parentElement.lastElementChild.classList.add("hidden");

            }
        });
    });
