//gerando token com math.
let curiosoGerado = Math.random().toString(16).substring(2);


//declarando objetos
const usuario1 = {
    nomeUsuario: "deden", 
    senhaUsuario: "12345",
    gravarDados: true,
    curioso: curiosoGerado,

}


//gerando token com math.
let curiosoGerado2 = Math.random().toString(16).substring(2);


//declarando objetos
const usuario2 = {
    nomeUsuario: "gege", 
    senhaUsuario: "12345",
    gravarDados: true,
    curioso: curiosoGerado2,
}


//da pra colocar atributos dinamicamente
let objetoMaluco = "quero adicionar dentro do objeto1"
usuario1[objetoMaluco] = "12"
// logo objetoMaluco = 12

//-------------------------------------------------------------------------------^criação usuarios
let listaDeUsuarios = [];
listaDeUsuarios.push(usuario1);
listaDeUsuarios.push(usuario2);
//usuarios colocados dentro 



addEventListener("click" , (evt)=> {
    if(evt.target.id == "botao"){
        const user = document.querySelector("#user");
        const pass = document.querySelector("#pass");
        
        
        
        
        
        try{
            listaDeUsuarios.forEach((usuario)=>{

                if(user.value == usuario.nomeUsuario && pass.value == usuario.senhaUsuario){
                    throw "VALIDADO";
                
            }
});
        throw "NÃO VALIDADO"
            

} catch(msg){
        const msgError = document.querySelector("#msgError");
        if(msg == "VALIDADO"){
            msgError.setAttribute("style","color:#00ff00;");
            msgError.innerHTML = "<span><strong> Login Efetuado com sucesso! </strong></span>";
    }
        else{
            msgError.setAttribute("style", "color:#ff0000;");
            msgError.innerHTML = "<span><strong> Usuário ou senha incorreta </strong></span>";

    }

    }}})

    

