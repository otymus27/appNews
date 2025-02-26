// Importar o service para acessar o banco de dados
const UserService = require("../services/UserService");


const create = async(req, res) => {
     //Recebendo dados de um formulário
    

     // Desmembrar os dados
     const {nome, login, senha, email, foto, background} = req.body;   

     // Validar dados
     if(!nome || !login || !senha || !email || !foto || !background){
          res.status(400).send({"message":"Preencher todos os campos!"});          
     }

     // Cadastrar no banco de dados
     const user = await UserService.create(req.body);

     if(!user){
          return res.status(400).send({message: "Erro ao criar registro!"})
     }

     //console.log(user);
     res.status(201).send({
          user:{
               id:user._id,
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