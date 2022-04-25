// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let id;

let wallet=localStorage.getItem("amount") || 0 

document.getElementById("wallet").innerText=wallet;

let movies_div=document.getElementById("movies");

async function search_Movies()
{
    try{
        const query=document.getElementById("search").value;
        const res= await fetch(`https://www.omdbapi.com/?apikey=2c7e4a0d&s=${query}`);
        const data = await res.json();
        
        const movies = data.Search;
        
        return movies;
        console.log(movies)

        
    }
    catch(error)
    {
        console.log("Error: ",error);
    }
}


function append_div_Movies(data)
{
    movies_div.innerHTML = null;

    data.forEach((el)=>{
        let div = document.createElement("div");
        div.setAttribute("class","movie_tab");

        let image=document.createElement("img");
        image.src=el.Poster;

        let title = document.createElement("p");
        title.innerText = el.Title;

        let btn = document.createElement("button");
        btn.innerText="Book now";
    
        btn.addEventListener("click",function(){
            console.log("inside addlistener")
            booknow(el)
        })

        div.append(image, title, btn);
        document.getElementById("movies").append(div);
    })
}
function booknow(d)
{
    console.log("inside book now")
    window.location.href = "checkout.html";
    localStorage.setItem("movie",JSON.stringify(d));
}

async function main()
{
    let data = await search_Movies();

    if(data===undefined)
    {
        return false;
    }
    append_div_Movies(data);
    
}

function debouncing(func,delay)
{
    if(id)
    {
        clearTimeout(id)
    }
    id= setTimeout(function(){
        func()
    },delay)
}