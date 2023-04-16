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

let preferencesCheck = 0;
let beanTyoeCheck = 0;
let quantityCheck = 0;
let grindCheck = 0;
let deliveriesCheck = 0;


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
        //Complete the order summary
        if(nameRadio.id == "capsule")
        {
            
        }
        else
        {
            
        }


        //Show the order button
        
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

        if(nameRadio.id !== "capsule")
        {
            if(nameRadio.name == "grind")
            {
                grindCheck = 1;
            }
            else
            {
                grindCheck = 0;
            }
        }
        

        if(nameRadio.name == "deliveries")
        {
            deliveriesCheck = 1;
        }


        if(nameRadio.id !== "capsule")
        {
            let sum = preferencesCheck + beanTyoeCheck + quantityCheck + grindCheck + deliveriesCheck
            console.log(sum);
        }       
        else
        {
            let sum = preferencesCheck + beanTyoeCheck + quantityCheck + deliveriesCheck
            console.log(sum);
        }

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



//Identifying option selected
let inputName = document.querySelectorAll('input');

inputName.forEach(inputNameGroup =>
    {
        inputNameGroup.addEventListener('click', () => 
        {
            //console.log(inputNameGroup.name);
            //console.log(inputNameGroup.id);
            
        });
    });



function order(id, name)
{
    //let nameOrder = document.querySelector('#'+id).parentElement.children[1].children[0].innerHTML;
    if(name == "preferences")
    {
        /*
        console.log(id);
        console.log(name);
        console.log("Ciclou em preferences");
        */
        if(id == "capsule")
        {
            console.log("Ciclou em preferences");
            console.log("Clicou em capsule");
            let withCapsule = document.querySelector('.withCapsule');
            withCapsule.forEach(a => 
                {
                    console.log(a);

                });
        }
        else
        {
            console.log("Ciclou em preferences");
            console.log("Não clicou em capsule");
        }
        
    }
    else
    {
        /*
        console.log(id);
        console.log(name);
        console.log("Não ciclou em preferences");
        */
       console.log("Não clicou em preferences");
    }
}
