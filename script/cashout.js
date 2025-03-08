document.getElementById('cash-out-btn').addEventListener('click', (event)=>{
    event.preventDefault()
    const pin = document.getElementById('cash-out-pin').value
    const convertedPin = parseInt(pin)
    const amount = document.getElementById('cash-out-amount').value
    convertedAmount = parseFloat(amount)
    const mainBalance = document.getElementById('main-balance').innerText
    const convertedMainBalance = parseFloat(mainBalance)

    if (convertedPin === 1234) {
        const sub = convertedMainBalance - convertedAmount
        document.getElementById('main-balance').innerText = sub
    } else {
        alert('enter valid pin')
    }
})