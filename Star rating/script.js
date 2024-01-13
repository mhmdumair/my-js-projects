const stars= document.querySelectorAll('.star');
const para= document.querySelector('.current-rating');

stars.forEach((star,index)=>{
    star.addEventListener('click',()=>{
        let current_index=index+1;
        para.innerText=`${current_index} of 5`;

        stars.forEach((element,i)=>{
            if(current_index>i){
                element.innerHTML="&#9733";
            }else{
                element.innerHTML="&#9734";
            }
        })
    })
})