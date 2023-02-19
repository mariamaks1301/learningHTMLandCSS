const buttons = document.querySelectorAll('.accordion');


buttons.forEach((item)=>{
    item.addEventListener('click', ()=>{
        let content = item.nextElementSibling;
        console.log(content);
        if(content.style.maxHeight){

        }else{
            
        }
    })
})