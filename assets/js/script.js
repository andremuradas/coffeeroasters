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



let inputRadio = document.querySelectorAll('input');

inputRadio.forEach(nameRadio =>
{
    nameRadio.addEventListener('click', () =>
    {
        document.querySelector('#'+nameRadio.name+"SummaryNumber").classList.add("number_item_checked");
        grindInactive()
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
