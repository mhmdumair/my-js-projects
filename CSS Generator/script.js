document.addEventListener('DOMContentLoaded',()=>{

    //border radius 
    const rangeInput=document.getElementById('all');
    const allvalue = document.getElementById('all-value');
    //text area
    const code = document.getElementById('code');
    //copy button
    const copy = document.getElementById('copy');
    //container
    const container = document.querySelector('.container')
    //for border style
    const borderStyleElement=document.getElementById('border-style');
    //border size
    const borsersizeDisplay= document.getElementById('brd-value');
    const bordersize=document.getElementById('size');

    //color
    const colorbox=document.getElementById('color');

    let allRadius=10;
    let brdsize=5;
    let coding="";
    let borderStyle="solid";
    let color="black"

    function allBorderUpdate(){
        allRadius=rangeInput.value;
        allvalue.innerText=`${allRadius}px`;
        coding=`border-radius: ${rangeInput.value}px;\nborder:${brdsize}px ${borderStyle} ${color};`
        code.value=coding;
        container.style.cssText=coding;
    }
    function updateBordersize(){
        brdsize=bordersize.value;
        borsersizeDisplay.innerText=`${brdsize}px`
        allBorderUpdate();
    }

    rangeInput.addEventListener('mousemove',allBorderUpdate);
    rangeInput.addEventListener('change',allBorderUpdate);

    bordersize.addEventListener('mousemove',updateBordersize);
    bordersize.addEventListener('change',updateBordersize);

    colorbox.addEventListener('change',()=>{
        color=colorbox.value;
        allBorderUpdate();
    })

    //copy button
    document.querySelector('#copy').addEventListener('click',()=>{
        code.select();
        document.execCommand('copy')
        alert('code copied')
    })
    //border style
    borderStyleElement.addEventListener('change',()=>{
        borderStyle=borderStyleElement.value;
        allBorderUpdate();
    })

})
