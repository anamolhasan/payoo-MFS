document.getElementById('login-btn').addEventListener('click', (event) => {
  event.preventDefault();

  const accountNumber = document.getElementById('acount-number').value;
  const pin = document.getElementById('pin').value;
  const pinNumber = Number(pin); // parseInt() এর বদলে Number() ব্যবহার করেছি

  if (accountNumber.length === 11) {
    if (pinNumber === 1234) {
      window.location.href="./main.html"
        alert('✅ লগইন সফল: Okay, ঠিক আছে!');
    } else {
      alert('❌ ভুল পিন: Pin ঠিক নেই');
    }
  } else {
    alert('❌ ভুল অ্যাকাউন্ট নম্বর: ঠিক নেই');
  }
});
