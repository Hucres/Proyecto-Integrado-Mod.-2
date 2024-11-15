let menuVisible = false;

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso")
        habilidades[0].classList.add("JAVASCRIPT");
        habilidades[1].classList.add("CSS");
        habilidades[2].classList.add("HTML");
        habilidades[3].classList.add("PHP");
        habilidades[4].classList.add("COMUNICACION");
        habilidades[5].classList.add("TRABAJO");
        habilidades[6].classList.add("CREATIVIDAD");
        habilidades[7].classList.add("DEDICACION");
        }
    }
window.onscroll = function(){
    efectoHabilidades()
}