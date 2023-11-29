const month=document.querySelector('#month')
const day=document.querySelector('#day')
const year=document.querySelector('#year')
const hours=document.querySelector('#hrs')
const munites=document.querySelector('#minites')
const secs=document.querySelector('#sec');

const daynames=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const monthName= ["Ja","Feb","Mar","Apr","May","June","Jul","Aug","Sep","October","Nov","Dec"]
const mOr=document.querySelector('.am')
// const mOr=document.querySelector('#am')
const datetime=new Date();
month.innerHTML=datetime.getDate();
day.innerHTML =monthName[datetime.getMonth()];
year.innerHTML=datetime.getFullYear();
if(datetime.getHours()>12){
    mOr.innerHTML="PM"
}
else{
    mOr.innerHTML="AM"
}
///////////////////put data into hours element
function clock(){
    const datetime=new Date();
    month.innerHTML=datetime.getDate();
    day.innerHTML =monthName[datetime.getMonth()];
    year.innerHTML=datetime.getFullYear();
    
    if(datetime.getHours() < 10){
hours.innerHTML= `0${datetime.getMinutes()} :`

    }else{
        hours.innerHTML=datetime.getHours()+":"
        munites.innerHTML=datetime.getMinutes() + ":";
        secs.innerHTML=datetime.getSeconds();
    }
}
setInterval(clock,400)

