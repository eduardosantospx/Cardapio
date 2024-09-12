
const add_cart = document.querySelector("#add_cart");
const qt_cart = document.querySelector("#qt_cart");
const section_burguer = document.querySelector("#section_burguer")

let add = 0;

section_burguer.addEventListener("click",(event)=>{
    let parent = event.target.closest("#add_cart");
    if(parent){
        add += 1
        qt_cart.innerHTML = `${add}`
    }
    
});