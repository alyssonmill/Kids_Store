
let div = document.getElementById("cart_icon");
let market = document.getElementById("market");

div.addEventListener("click", () =>{


    if(market.style.display != "block"){
        market.style.display = "block";
    }else{
        market.style.display = "none";
    }
})

let form = document.getElementsByClassName("contact_input");

[...form].forEach(x => {
    window.localStorage.setItem(x,"teST")
});








