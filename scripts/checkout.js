// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let wallet=localStorage.getItem("amount") || 0 

document.getElementById("wallet").innerText=wallet;

