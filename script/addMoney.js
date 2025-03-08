document.getElementById('add-money').addEventListener('click', (event)=>{
    event.preventDefault()
    const amount = document.getElementById('amount').value
    const convertedAmount = parseFloat(amount)
    const pin = document.getElementById('pin').value
    const convertedPin = parseInt(pin)
    const mainBalance = document.getElementById('main-balance').innerText
    const convertedMainBalance = parseFloat(mainBalance)

    if (amount && pin) {
        if (convertedPin === 1234) {
            const sum = convertedMainBalance + convertedAmount
            document.getElementById('main-balance').innerText = sum
        } else {
            alert('not matching pin')
        }
   } else {
    alert('enter amount')
   }
})