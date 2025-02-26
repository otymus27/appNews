const create = (req, res) => {
     //Recebendo dados de um formulário
     const user = req.body;

     // Desmembrar os dados
     const {nome, login, senha, email, foto, background} = req.body;   

     // Validar dados
     if(!nome || !login || !senha || !email || !foto || !background){
          res.status(400).send({"message":"Preencher todos os campos!"});          
     }

     //console.log(user);
     res.status(201).send({
          user:{
               nome,
               login,
               senha,
               email,
               foto,
               background
          },
          message:"Usuário criado com sucesso!"
     });
}


module.exports = { create }