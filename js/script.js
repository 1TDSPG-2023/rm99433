
//<button id="meu-botao"> click</button>

console.log("hello world!");
const botao = document.getElementById("meu-botao");
// Atrelando um evento ao ELEMENTO
botao.addEventListener("click", function(){
    //console.log("banana");
    let r = 0;
    let g = 0;
    let b = 0;

    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);

    this.setAttribute("style", `background-color:rgb(${r},${g},${b});`);


//recupere o elemento tit-sec e atrele a ele um evento de click
//quando clickado o elemento deve diminuir em 10px;





    console.log(this.textContent);
    
}
);

const tits = document.querySelector(".tit-sec");
botao.addEventListener("click", function(){
    tits.setAttribute("style", "font-size:15px")



});





    
