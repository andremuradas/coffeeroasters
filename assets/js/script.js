let title = document.querySelectorAll('.configuration_title');

title.forEach(idTitle => 
    {
        idTitle.addEventListener('click', () => 
        {
            document.getElementById(idTitle.id+"Options").classList.toggle("flex");
            
            if(document.getElementById(idTitle.id).classList.contains("configuration_title"))
            {
                document.getElementById(idTitle.id).children[1].classList.toggle("arrow_up");
            }

        });
    });



let inputRadio = document.querySelectorAll('input');

inputRadio.forEach(nameRadio =>
{
    nameRadio.addEventListener('click', () =>
    {
        document.querySelector('#'+nameRadio.name+"Sumary").classList.add("number_item_checked");
        grindInactive()
    });
});



function grindInactive()
{
    if(document.querySelector('input[id="capsule"]').checked)
    {
        document.querySelector('#grindOptions').style.display = "none";
        document.querySelector('#grindSumary').classList.remove("number_item_checked");
        document.querySelectorAll('.summary_item_content')[3].classList.replace("summary_item_content","summary_item_content_disable");

        let inputRarioGrind = document.querySelectorAll('input[name="grind"]');
        inputRarioGrind.forEach(e =>
        {
            e.checked = false
        });

        document.querySelectorAll('.configuration_container')[3].children[0].classList.replace("configuration_title","configuration_title_disabled");
    }
    else
    {
        document.querySelector('#grindOptions').removeAttribute("style");
        
        if(document.querySelectorAll('.summary_item')[3].children[0].classList.contains("summary_item_content_disable"))
        {
            document.querySelector('.summary_item_content_disable').classList.replace("summary_item_content_disable","summary_item_content");
        }


        if(document.querySelectorAll('.configuration_container')[3].children[0].classList.contains("configuration_title_disabled"))
        {
            document.querySelectorAll('.configuration_container')[3].children[0].classList.replace("configuration_title_disabled","configuration_title");
        }
        
    }
}
