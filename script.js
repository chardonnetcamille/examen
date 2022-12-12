
const logo = document.querySelector(".logo")

const menu = document.querySelector(".menu")

const annonces = document.querySelector("#annonces")

const partenaires = document.querySelector("#partenaires")


logo.addEventListener("click", ()=>{

            menu.classList.toggle("menu-visible")

} )


annonces.addEventListener("click", ()=>{

         annonces.classList.remove('hidden')  
         menu.classList.remove("menu-visible") 

})

function cacherTout(){

    let toutesLesPages = content.querySelectorAll('div')

}

