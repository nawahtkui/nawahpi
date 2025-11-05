let balance = 1000;

function transferTokens() {
  const recipient = document.getElementById('recipient').value;
  const amount = Number(document.getElementById('amount').value);
  const messageEl = document.getElementById('message');

  if(!recipient || amount <= 0 || amount > balance) {
    messageEl.innerText = "Invalid transfer.";
    return;
  }

  balance -= amount;
  document.getElementById('balance').innerText = balance;
  messageEl.innerText = `Successfully sent ${amount} NWTK to ${recipient} (Demo).`;
}
