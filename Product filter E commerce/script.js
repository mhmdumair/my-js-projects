const buttons=document.querySelectorAll('.btn');
const search=document.querySelector('#search');
const boxes=document.querySelectorAll('.box');

search.addEventListener('keyup',(e)=>{
    let searchText=e.target.value.toLowerCase().trim();
    boxes.forEach(element=>{
        if(!(element.dataset.item.includes(searchText))){
            element.style.display="none"
        }else{
            element.style.display="block"
        }
    })
    removeActive();
    buttons[0].classList.add('btn-clicked');
})

buttons.forEach(button=>{
    button.addEventListener('click',e=>{
        e.preventDefault();
        removeActive()
        e.target.classList.add('btn-clicked');
        const data=button.dataset.filter;
        boxes.forEach(box=>{
            if(box.dataset.item===data || data=="all"){
                box.style.display="block";
            }else{
                box.style.display="none";
            }
        })
    })
})

function removeActive(){
    buttons.forEach(button=>{
        button.classList.remove('btn-clicked');
    })
}