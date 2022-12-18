// Selecteurs : Methode JS qui permet de selectionner un élément du DOM

const button_black_white = document.querySelector('#btn');
const h1 = document.querySelectorAll("h1");
const body = document.querySelector("body");
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const cartes = document.querySelectorAll(".carte_projet");
const banner = document.querySelector(".banner");
const p = document.querySelectorAll(".bloc_a_propos_texte , .bloc_info");

const button_footer = document.querySelector("#button_footer");
const design_btn_footer = document.querySelector("button");



// Evenements

/*-----------------------BOUTON MODE NUIT---------------------------*/

button_black_white.addEventListener("click", function() {    // Ecouter/Reagir un evenement


    button_black_white.classList.toggle("btn_lune");



    for (let i = 0; i < h1.length; i++) {               //Boucle

          if(h1[i].style.color === "rgb(82, 82, 82)"){      //Modifier le style d'un evenement en JS

            h1[i].style.color = "white";
          }

          else{
              h1[i].style.color = "rgb(82, 82, 82)";
          }
      }  


    body.classList.toggle("white");                    //Modifier une classe en JS

    header.classList.toggle("black2");

    footer.classList.toggle("black2");    

    for (let i = 0; i < cartes.length; i++) {

        cartes[i].classList.toggle("black3");
      }  


    banner.classList.toggle("black_banner");
   
    
    
    for (let i = 0; i < p.length; i++) {

        if(p[i].style.color === "rgb(82, 82, 82)"){

          p[i].style.color = "white";
        }       

        else{
            p[i].style.color = "rgb(82, 82, 82)";
        }
        }  

        if(button_footer.style.color === "rgb(82, 82, 82)"){

          button_footer.style.color = "white";
        }       

        else{
          button_footer.style.color = "rgb(82, 82, 82)";
        }
  
})

/*---------------------------------------------------------------*/

/*-----------------------BOUTON FOOTER---------------------------*/

design_btn_footer.style.fontFamily = "calibri";
design_btn_footer.style.fontSize = "30px";
design_btn_footer.style.borderRadius = "15px";
design_btn_footer.style.backgroundColor = "transparent";
design_btn_footer.style.border = "none";
design_btn_footer.style.textShadow = "0 0 7px rgb(246, 168, 13),0 0 10px rgb(246, 168, 13)";

button_footer.addEventListener("click", function() {
      
    footer.classList.toggle("footer_show");

        if(document.getElementById("button_footer").innerHTML === "Hide Footer"){               //Remplacer du contenu en JS
    
          document.getElementById("button_footer").innerHTML = "Click Me";
        }

        else{
          document.getElementById("button_footer").innerHTML = "Hide Footer";
        }
    
})


/*---------------------------------------------------------------*/


//const button_bloc_texte = document.querySelector(".button_mouv");
//const bloc_texte = document.querySelectorAll(".bloc_info");


//button_bloc_texte.addEventListener("click", function(){

 // for (let i = 0; i < bloc_texte.length; i++) {
  //  bloc_texte[i].classList.toggle("animate_texte");
  //}  
  
//})

/*    if(button_black_white.style.content === "url(../../assets/images/soleil.png)"){
      button_black_white.style.content = "url(../../assets/images/lune.png)";
    }

    else if(button_black_white.style.content === "url(../../assets/images/lune.png)"){
      button_black_white.style.content = "url(../../assets/images/soleil.png)";
    }
*/


      
