const display=document.querySelector('.clock');
function getTime(){
    const date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes()
    let seconds=date.getSeconds();
    let ampm=hours>12?"PM":"AM"
    hours=hours%12
    let time=`${addzero(hours)}: ${addzero(minutes)}: ${addzero(seconds)} ${ampm}`
    display.innerText=time
    display.setAttribute('data-text',time)
    console.log(time)
}
setInterval(getTime,1000);

function addzero(value){
    return String(value).length<2?"0"+value:value;
}