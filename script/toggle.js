 document.getElementById('cash-out').style.display = 'none'

document.getElementById('add-money-box').addEventListener('click', ()=>{
    document.getElementById('add-moneys').style.display = 'block'
    document.getElementById('cash-out').style.display = 'none'
   
})
document.getElementById('cash-out-box').addEventListener('click', ()=>{
    document.getElementById('cash-out').style.display = 'block'
    document.getElementById('add-moneys').style.display = 'none'
   
})