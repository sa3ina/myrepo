const hourEl=document.getElementById("hour")
const minuteEl=document.getElementById("minutes")
const secondEl=document.getElementById("seconds")
const am_pmEl=document.getElementById("am_pm")

function updateClock(){
    let h= new Date().getHours()
    let m= new Date().getMinutes()
    let s=new Date().getSeconds()
    let am_pm="AM"
    
    if(h>12){
        h=h-12
        am_pm="PM"
    }

    h= h<10 ? "0" + h : h
    m= m<10 ? "0" + m : m
    s= s<10 ? "0" + s : s

    hourEl.innerText=h
    minuteEl.innerText=m
    secondEl.innerText=s
    am_pmEl, (innerText=am_pm)
    
    setTimeout(()=>{
    updateClock()
    },1000)
}
updateClock()