// Store the wallet amount to your local storage with key "amount"

document.querySelector("#wallet").innerText = JSON.parse(localStorage.getItem("amount"))


document.querySelector("#add_to_wallet").addEventListener("click", addToWallet)

function addToWallet(){

    let movieAmount = document.querySelector("#amount").value

    localStorage.setItem("amount", Number(movieAmount))

    

}