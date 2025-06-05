// Creation de la fonction
const openMenu = () => {
    const menu = document.querySelector(".header-menu"); // On selectionne le header menu
    
    menu.classList.toggle("active") // On lui met la classe active

    if(menu.classList.contains("active")) { // Si la classe est active 
        document.querySelector("header .material-icons").innerHTML = "close" // On defini sur close
    }
    else { // il n'a pas la classe active (donc il est close)
        document.querySelector("header .material-icons").innerHTML = "menu" // On redefini sur menu
    }
}