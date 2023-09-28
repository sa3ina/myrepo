if (typeof document !== 'undefined') {
    let element = document.querySelector('.class-name')
    
 
let count =0
let countEl=document.getElementById("count-el")
let saveEl=document.getElementById("save-el")
console.log(countEl)
function increment()
{
    count+=1
    countEl.textContent=count
}
function save()
{
    let savedEntries=count+" - "
    saveEl.textContent+=savedEntries
    console.log(countEl)
    countEl.textContent=0
    count=0
}


}