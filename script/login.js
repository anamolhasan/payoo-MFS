
// stap 1
document.getElementById('login-btn').addEventListener('click', function(event){
  event.preventDefault()
   
  const acountNumber = document.getElementById('Acount-number').value
  const pin = document.getElementById('pin').value
  const convertedPin = parseInt(pin)
  if(acountNumber.length === 11){
    console.log(typeof pin)
       if(convertedPin === 1234){
         window.location.href='./main.html'
       }
       else{
        alert('pin tikh nai')
       }
  }
  else{
    alert('need valid acount number')
  }


})