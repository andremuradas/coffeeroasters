let title = document.querySelectorAll('.configuration_title');

title.forEach(idTitle => 
    {
        idTitle.addEventListener('click', () => 
        {
            if(document.getElementById(idTitle.id).classList.contains("configuration_title"))
            {
                document.getElementById(idTitle.id+"Options").classList.toggle("flex");
                document.getElementById(idTitle.id).children[1].classList.toggle("arrow_up");
            }
        });
    });




//Actions for inputs
let inputRadio = document.querySelectorAll('input');

inputRadio.forEach(nameRadio =>
{
    nameRadio.addEventListener('click', () =>
    {
        //Change color for summary number
        document.querySelector('#'+nameRadio.name+"SummaryNumber").classList.add("number_item_checked");

        //Call function
        grindInactive();

        order(nameRadio.id, nameRadio.name);
        button(nameRadio);


    });
});



function grindInactive()
{
    if(document.querySelector('input[id="capsule"]').checked)
    {
        //Hide of select grind options
        document.querySelector('#grindOptions').style.display = "none";
        document.querySelector('#grindOptions').classList.remove("flex");

        //Remove color of number summary
        document.querySelector('#grindSummaryNumber').classList.remove("number_item_checked");

        //Disable sumary item
        document.querySelector('#grindSummary').classList.replace("summary_item_content","summary_item_content_disable");

        //Clean input radio from grind section
        let inputRarioGrind = document.querySelectorAll('input[name="grind"]');
        inputRarioGrind.forEach(e =>
        {
            e.checked = false
        });

        //Disable grind title
        document.querySelectorAll('.configuration_container')[3].children[0].classList.replace("configuration_title","configuration_title_disabled");

        //Arrow down
        document.querySelector("#grind").children[1].classList.remove("arrow_up");

        
    }
    else
    {
        //Remove style to hide grind options
        document.querySelector('#grindOptions').removeAttribute("style");
        
        if(document.querySelector('#grindSummary').classList.contains("summary_item_content_disable"))
        {
            document.querySelector('#grindSummary').classList.replace("summary_item_content_disable","summary_item_content");
        }


        if(document.querySelectorAll('.configuration_container')[3].children[0].classList.contains("configuration_title_disabled"))
        {
            document.querySelectorAll('.configuration_container')[3].children[0].classList.replace("configuration_title_disabled","configuration_title");
        }
        
         
    }
}



//Identifying option selected and send the name to Order Summary section
let inputName = document.querySelectorAll('input');

inputName.forEach(inputNameGroup =>
    {
        let nameSelection = document.querySelector('#'+inputNameGroup.id).parentElement.children[1].children[0].innerHTML;
        inputNameGroup.addEventListener('click', () => 
        {
            document.querySelector('#'+inputNameGroup.name+'Order').innerHTML = nameSelection;
            document.querySelector('#'+inputNameGroup.name+'OrderResume').innerHTML = nameSelection;
        });
    });



function order(id, name)
{
    if(name == "preferences")
    {
        let withCapsule = document.querySelectorAll('.withCapsule');
        let noCapsule = document.querySelectorAll('.noCapsule');
        withCapsule.forEach(a => 
            {
                if(id == "capsule")
                {
                    a.classList.remove("hide");
                }
                else
                {
                    a.classList.add("hide");
                }
            });

        noCapsule.forEach(b => 
            {
                if(id == "capsule")
                {
                    b.classList.add("hide");
                }
                else
                {
                    b.classList.remove("hide");
                }
            });
    }

}


let preferencesCheck = 0;
let beanTyoeCheck = 0;
let quantityCheck = 0;
let grindCheck = 0;
let deliveriesCheck = 0;

function button(nameRadio)
{
        
    if(nameRadio.name == "preferences")
    {
        preferencesCheck = 1;
    }

    if(nameRadio.name == "beanType")
    {
        beanTyoeCheck = 1;
    }

    if(nameRadio.name == "quantity")
    {
        quantityCheck = 1;
    }

    if(nameRadio.name == "grind")
    {
        grindCheck = 1;
    }

    if(nameRadio.name == "deliveries")
    {
        deliveriesCheck = 1;
    }

    if(document.querySelectorAll('input')[0].checked == true)
    {
        let sum = preferencesCheck + beanTyoeCheck + quantityCheck + deliveriesCheck;
        if(sum == 4)
        {
            if(document.querySelector('#createButton').classList.contains("main_button_disabled"))
            {
                document.querySelector('#createButton').classList.replace("main_button_disabled", "main_button_default");
            }

            
        }
        console.log("With capsule "+sum);

    }
    else
    {
        if(document.querySelector('#createButton').classList.contains("main_button_default"))
        {
            document.querySelector('#createButton').classList.replace("main_button_default", "main_button_disabled");
            grindCheck = 0
        }



        let sum = preferencesCheck + beanTyoeCheck + quantityCheck + grindCheck + deliveriesCheck;
        if(sum == 5)
        {
            if(document.querySelector('#createButton').classList.contains("main_button_disabled"))
            {
                document.querySelector('#createButton').classList.replace("main_button_disabled", "main_button_default");
            }
            
        }

        console.log("Without capsule "+sum);

    }

}


let createButton = document.querySelector('#createButton');
createButton.addEventListener('click', openModal);



function openModal()
{
    if(createButton.classList.contains("main_button_default"))
    {
        document.querySelector('.order_bg').style.display = "block";
        document.querySelector('.order_sumary_resume').style.display = "block";
    }
}


let bg = document.querySelector('.order_bg');
bg.addEventListener('click', closeBg);

function closeBg()
{
    document.querySelector('.order_bg').style.display = "none";
    document.querySelector('.order_sumary_resume').style.display = "none";
}