const outputEl=document.getElementById('output');
const copyEl=document.getElementById('copy');
const passwordLengthEl=document.getElementById('length');
const numberEl=document.getElementById('number');
const capitalEl=document.getElementById('capital');
const smallEl=document.getElementById('small');
const symbolsEl=document.getElementById('symbols');
const frmEl=document.getElementById('frm');

//Copying password

copyEl.addEventListener('click',async()=>{
    const pass=outputEl.value;
    if(pass){
        await navigator.clipboard.writeText(pass) //this await handle time delays
        alert("Password Copied to clipboard!")
    }else{
        alert("There is no Password to Copy")
    }
})

/*Ascii code
    65-90  =>A-Z
    97-122 =>a-z
    48-57  =>0-9
    32     => space
*/

//Generate Random char
function generateRandomChar(min,max){
    const limit=max-min+1;
    return String.fromCharCode(Math.floor(Math.random()*limit)+min)
}
function capitalValue(){
    return generateRandomChar(65,90);
}
function smallValue(){
    return generateRandomChar(97,122);
}
function numberValue(){
    return generateRandomChar(48,57);
}
function symbolValue(){
    const symbl="~`!@#$%^&*()_-+=|\}]{[';:,<.>/?";
    return symbl[Math.floor(Math.random()*symbl.length)];
}

const functionArray=[
    {
        element:numberEl,
        fun:numberValue
    },
    {
        element:capitalEl,
        fun:capitalValue
    },
    {
        element:smallEl,
        fun:smallValue
    },
    {
        element:symbolsEl,
        fun:symbolValue
    }
]
frmEl.addEventListener('submit',(el)=>{
    el.preventDefault();
    const psdlength=passwordLengthEl.value;
    let generatedPasword="";
    const funcArray=functionArray.filter(({element})=>element.checked);
    for(let i=0;i<psdlength;i++){
        const index=Math.floor(Math.random()*funcArray.length);
        const letter=funcArray[index].fun();
        generatedPasword+=letter;
    }
    outputEl.value=generatedPasword;
})