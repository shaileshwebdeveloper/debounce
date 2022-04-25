// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let checkoutData =  JSON.parse(localStorage.getItem("movie")) 
let walletmoney = document.querySelector("#wallet")
walletmoney.innerText = JSON.parse(localStorage.getItem("amount"))
// console.log(walletmoney.innerText)

let seat = document.querySelector("#number_of_seats").value

checkoutData.map(function(el){

    let container = document.getElementById("movie")
    container.innerHTML = ""

    let box = document.createElement('div')

    let image =  document.createElement('img')
    image.src = el.Poster
    
    
    let title  = document.createElement('p')
    title.innerText =  el.Title

box.append(title, image)

container.append(box)


})


document.querySelector("#confirm").addEventListener("click", final)



function final(){
 
   let remainingmoney = walletmoney.innerText - (seat*100)
  console.log(seat*100)

   if(remainingmoney > 0)
   {
       alert("Insufficient Balance!")
   }
   else{
       alert("Booking successful!")
       walletmoney.innerText = remainingmoney
   }


}