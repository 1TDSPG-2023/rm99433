const botao = document.getElementById("botao");
const body = document.getElementById("body")
botao.addEventListener("click", function(){
    //console.log("banana");
    let r = 0;
    let g = 0;
    let b = 0;

    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);

    body.setAttribute("style", `background-color:rgb(${r},${g},${b});`);
})


const botao1 = document.getElementById("botao1");
const lista = document.getElementById("palavras-do-hobbit");
const texto = document.getElementById("tabela");
botao1.addEventListener("click", function(){
    let textoAdd = texto.value; //por ser input, para recuperar o valor tem que ser value
    let newItem = document.createElement('li');
    newItem.textContent = textoAdd;
    lista.appendChild(newItem);
})

const botao2 = document.getElementById("botao2");
const imagem = document.getElementById("img1");
botao2.addEventListener("click", function(){
    numero = Math.random()
    if (numero < 0.5){ imagem.setAttribute("src", "godmilos.jpg")};
    if (numero < 0.75 && numero > 0.5){ imagem.setAttribute("src", "foto2.jpg")};
    if (numero < 1 && numero > 0.75){ imagem.setAttribute("src", "foto4.jfif")};

 })

 const botao3 = document.getElementById("botao3");
 const buraco = document.getElementById("buraco");
 botao3.addEventListener("click", function(){
    let botao3Texto = botao3.textContent;
    buraco.textContent = botao3Texto;
    buraco.setAttribute("style", "font-size:90px");
 })

 const botao4 = document.getElementById("botao4");
 const misterM = document.getElementById("misterM");
 botao4.addEventListener("click", function(){
    misterM.setAttribute("style", "display: none");
 })





