//let listaDeUsuarios = [
 //   {
 //       nomeUsuario: "john",
//      nomeCompleto: "John da Silva",
 //       senhaUsuario: "12345"
 //   },
  //  {   
  //      nomeUsuario: "paulo",
  //      nomeCompleto: "paulo da Silva",
  //      senhaUsuario: "12345"
//
 //   }
//
//];

//GUARDAR A LISTA DE OBJETOS NO LOCAL-STORAGE
localStorage.setItem( "listaUser",  JSON.stringify(listaDeUsuarios));

//------------------------------------------------------------------------------^criação usuarios



addEventListener("click" , (evt)=> {
    const user = document.querySelector("#user");
    const pass = document.querySelector("#pass");
    if(evt.target.id == "botao"){
        
        
        
        
        
        
        try{
            //recuperar a lista de usuários do localStorage
            let listaDeUsuarios = JSON.parse(localStorage.getItem("listaUser"));



            listaDeUsuarios.forEach((usuario)=>{

                if(user.value == usuario.nomeUsuario && pass.value == usuario.senhaUsuario){
                    throw "VALIDADO";
                
            }
});
        throw "NÃO VALIDADO"
            

}   catch(msg){
        const msgError = document.querySelector("#msgError");
        if(msg == "VALIDADO"){
            msgError.setAttribute("style","color:#00ff00;");
            msgError.innerHTML = "<span><strong> Login Efetuado com sucesso! </strong></span>";
    }
        else{
            msgError.setAttribute("style", "color:#ff0000;");
            msgError.innerHTML = "<span><strong> Usuário ou senha incorreta </strong></span>";

    }}
    }else if(evt.target.className == "fa fa-eye" || evt.target.className == "fa fa-eye-slash"){
        
        if(pass.getAttribute("type") == "password"){
            evt.target.setAttribute("class","fa fa-eye-slash")
            pass.setAttribute("type","text");
        }else{
            evt.target.setAttribute("class","fa fa-eye")
            pass.setAttribute("type","password");
                
            }


    }
})

    

