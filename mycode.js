const maincard = document.querySelector(".card1")
const notmaincard = document.querySelector(".card2")
const submit = document.getElementById("cta")
const rating = document.getElementById("rating")
const rates= document.querySelectorAll(".btn")

submit.addEventListener("click" , () =>{
    notmaincard.classList.remove("hide");
    maincard.style.display="none";
})

rates.forEach((rate) =>{
    rate.addEventListener("click", () =>{
       rating.innerHTML = rate.innerHTML;
    } )
})