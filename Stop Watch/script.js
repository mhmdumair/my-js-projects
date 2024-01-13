const start=document.querySelector('.start');
const stop=document.querySelector('.stop');
const reset=document.querySelector('.reset');

let hours=0;
let mins=0;
let second=0;
let ms=0;
let timer;

start.addEventListener('click',()=>{
    start.classList.add('active');
    stop.classList.remove('active')
    reset.classList.remove('active')
    
    timer=setInterval(()=>{
        ms+=1;
        updateDisplay();
    },10)
    
})
stop.addEventListener('click',()=>{
    stop.classList.add('active');
    start.classList.remove('active')
    reset.classList.remove('active')
    clearInterval(timer);
})
reset.addEventListener('click',()=>{
    stop.classList.add('active');
    reset.classList.add('active');
    start.classList.remove('active')

    hours=mins=second=ms=0;
    clearInterval(timer);
    updateDisplay();
})
function updateDisplay(){
    document.querySelector('.hours').innerText=addZero(Math.floor(ms/100/60/60))
    document.querySelector('.mins').innerText=addZero(Math.floor(ms/100/60)%60);
    document.querySelector('.sec').innerText=addZero(Math.floor(ms/100)%60);
    document.querySelector('.msec').innerText=addZero(ms%100);
}
function addZero(value){
    return String(value).length<2?"0"+value:value;
}