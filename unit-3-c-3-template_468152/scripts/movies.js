// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page



//http://www.omdbapi.com/?s=avengers&apikey=3d1edb16

// let data =  document.querySelector("#search").value

document.querySelector("#wallet").innerText = JSON.parse(localStorage.getItem("amount"))

async function searchMovies(){
    
try{
 
 const search =  document.querySelector("#search").value

let res = await fetch(`http://www.omdbapi.com/?apikey=3d1edb16&s=${search}`)
// console.log(res)

let data = await res.json();

// console.log(data)

let moviesData =  data.Search //array of objects

console.log(moviesData)

appendMovies(moviesData)


}catch(err)
{
    console.log(err)
}

}



function appendMovies(moviesData){

    let container = document.getElementById("movies")
    container.innerHTML = ""

moviesData.map(function(el){

let box = document.createElement('div')

let image =  document.createElement('img')
image.src = el.Poster


let title  = document.createElement('p')
title.innerText =  el.Title

let btn = document.createElement("button")
btn.innerText = "Book Now"
btn.className ="book_now"
btn.addEventListener("click", function(){
    bookNow(el)
})

box.append(image, title, btn)

container.append(box)


})


}

//debouncing

let id;

function debounce(func, delay)
{
   if(id)
   {
       clearTimeout(id)
   }


   id = setTimeout(() => {

       func()   

   }, delay);
}


let checkoutData =  JSON.parse(localStorage.getItem("movie")) || []

function bookNow(el){

checkoutData.push(el)
console.log(checkoutData)

localStorage.setItem("movie", JSON.stringify(checkoutData))

window.location.href = "checkout.html"


}