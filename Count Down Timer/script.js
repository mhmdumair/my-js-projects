const days=document.querySelector("#days")
const hours=document.querySelector("#hours")
const minutes=document.querySelector("#minutes")
const seconds=document.querySelector("#seconds")
const currentYear=new Date().getFullYear();
let newYear=new Date(`january 1 ${currentYear+1} 00:00:00`);


setInterval(update,1000);

function update(){
    const dateNow=new Date();
    const difference= newYear-dateNow;
    const d = Math.floor(difference/1000/60/60/24);
    const h = Math.floor((difference/1000/60/60)%24);
    const m = Math.floor((difference/1000/60)%60);
    const s = Math.floor((difference/1000)%60);

    days.innerText=d<10?"0"+d:d
    hours.innerText=h<10?"0"+h:h
    minutes.innerText=m<10?"0"+m:m
    seconds.innerText=s<10?"0"+s:s
}
