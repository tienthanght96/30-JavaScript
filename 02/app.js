
const hour = document.querySelector('.hour-hand');
const second =  document.querySelector('.second-hand') ;
const min =  document.querySelector('.min-hand') ;
function setMin() {
    const now = new Date();
    const rotate = {
        hour : now.getHours(),
        min : now.getMinutes(),
        second : now.getSeconds()
    };
    hour.style.transform= `rotate(${((rotate['hour'] / 12) * 360) + ((rotate['min']/60)*30) + 90}deg)` ;
    second.style.transform = `rotate(${rotate['second']*6+90}deg)`;
    min.style.transform = `rotate(${rotate['min']*6+90}deg)`;

}

window.setInterval(setMin,1000);
setMin();
