// Store the wallet amount to your local storage with key "amount"
 let wallet=localStorage.getItem("amount") || 0 

document.getElementById("wallet").innerText=wallet;

function addToWallet()
{
    let getformstorage= +localStorage.getItem("amount") || 0;
    let amount = +document.getElementById("amount").value;
    let set_to_storage = getformstorage + amount;

    localStorage.setItem("amount",set_to_storage);

    document.getElementById("wallet").innerText=set_to_storage;
    

}