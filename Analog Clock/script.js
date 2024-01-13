const displayHours=document.querySelector('.hours');
const displayMinutes=document.querySelector('.minutes');
const displaySeconds=document.querySelector('.seconds');

setInterval(runClock,1000);

function runClock(){
    const time=new Date();
    const seconds=time.getSeconds()/60;
    const minutes=(seconds+time.getMinutes())/60;
    const hours = (minutes+time.getHours())/12;

    displaySeconds.style.setProperty('--rotation',seconds*360);
    displayMinutes.style.setProperty('--rotation',minutes*360);
    displayHours.style.setProperty('--rotation',hours*360);

    
}

let rotation=0;
const dashes=document.querySelector('.dashes');
for(let i=0;i<60;i++){
    const dash=document.createElement('div');
    dash.className="dash"
    dash.style.transform=`rotate(${rotation}deg)`
    const spn=document.createElement('span');
    dash.appendChild(spn)
    dashes.appendChild(dash)
    rotation+=6;
}
