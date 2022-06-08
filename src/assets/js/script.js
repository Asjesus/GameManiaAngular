
function cadastrarNewsletter() {
let buscar = document.getElementById("campo-buscarProduto").value 
alert("value")


}

function mostrarMenu() {
   let menu = document.getElementById("menu")

   if(getComputedStyle(menu).display == "none"){
    menu.style.display = "flex"
   } else {
       menu.style.display = "none"
   }

   
    
}


$(document).ready(function(){

    let slideAtual = 1
    let listaSlides = ["banner-1", "banner-2", "banner-3"]

    setInterval(mudarSlide, 4000)

   function mudarSlide() {

    // Remover slider
    if (slideAtual) {
        $("#carrossel").removeClass(listaSlides[slideAtual - 1])
    } else {
        $("#carrossel").removeClass(listaSlides[listaSlides.length -1])
    }
     


    // Exibir o slider atual

    $("#carrossel").addClass(listaSlides[slideAtual])

    // Indicar qual o slider atual
       
    slideAtual++

    if (slideAtual > 2 ){
        slideAtual = 0
    }
   }
})


