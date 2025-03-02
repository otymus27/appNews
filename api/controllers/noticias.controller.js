// Importar módulo responsável pela comunicação com o banco de dados
import NoticiaService from "../services/NoticiaService.js";

// Função para cadastrar registros
const create = async (req, res) => {
     try {
          //Receber os dados de um formulário e desmembrar os dados
          const { titulo, texto, banner } = req.body;

          // Validar dados
          if (!titulo || !texto || !banner) {
               res.status(400).send({ "message": "Preencher todos os campos!" });
          }

          // Aqui chamamos o service para cadastrar o registro no banco de dados
          //const noticias = await NoticiaService.create(req.body);

          await NoticiaService.create({
               titulo,
               texto,
               banner,   
               user: req.userId,

          });

          res.send(201);         
     } catch (error) {
          res.status(500).send({ message: error.message });
     }

}

// Função para leitura de registros
const listar = async (req, res) => {
     try {
          // Variável para receber um query params vindo da requisição
          let {limit, offset} = req.query;
          
          // Aqui fazemos a um cast de string para number
          limit = Number(limit);
          offset = Number(offset);

          // Quantidade de registros por pagina
          if(!limit){
               limit = 5;
          }

          // Aqui é quantos itens será pulado
          if(!offset){
               offset = 0;
          }        

          // Variável para receber um conjunto de registros ou array
          const noticias = await NoticiaService.listar(offset,limit);

          const totalRegistro = await NoticiaService.contarRegistros();        
          const paginaAtual = req.baseUrl;    
          const next = offset + limit;
          const nextPage = next < totalRegistro ? `${paginaAtual}?limit=${limit}&offset=${next} ` : null;
          const previous = offset - limit < 0 ?null: offset - limit;
          const previousPage = previous ? `${paginaAtual}?limit=${limit}&offset=${previous}` : null;


          if (noticias.length === 0) {
               return res.status(400).send({ message: "Nenhum registro cadastrado!" });
          }

          // Resposta para o cliente enviando um objeto
          res.status(200).send({               
               nextPage,
               previousPage,
               limit,
               offset,
               totalRegistro,
               results: noticias.map((noticia) => ({
                    id: noticia.id,
                    titulo: noticia.titulo,
                    texto: noticia.texto,
                    banner: noticia.banner,
                    nome: noticia.user.nome,
                    login: noticia.user.login,
                    likes: noticia.likes,
                    comments: noticia.comments,
               }))                                    
          });          

     } catch (error) {
          res.status(500).send({ message: error.message });
     }

}

// Função para buscar o primeiro dado de uma lista no banco de dados
const topNews = async (req, res) =>{
     try {
          const noticias = await NoticiaService.topNews();

          if (!noticias) {
               return res.status(400).send({ message: "Nenhum registro cadastrado!" });
          }

          // Resposta para o cliente enviando um objeto
          res.status(200).send({
               noticias:{
                    id: noticias.id,
                    titulo: noticias.titulo,
                    texto: noticias.texto,
                    banner: noticias.banner,
                    likes: noticias.likes,
                    comments: noticias.comments,
                    nome: noticias.user.nome,
                    login: noticias.user.login,
               },
          });
          
     }
     catch(error){
          res.status(500).send({ message: error.message });
     }

    
}

// Função para buscar registros por Titulo
const buscarPorTitulo = async (req, res) => {
     try {
          // Aqui passamos o parâmetro por query para rota
          const {titulo} = req.query;
          console.log(titulo);

          // Variável para receber o registro vindo do banco de dados, além de passarmos o parâmetro para função 
          const noticias = await NoticiaService.buscarPorTitulo(titulo);

          // Aqui fazemos uma validação
          if(noticias.length ===0){
               return res.status(400).send({ message: "Nenhum registro cadastrado nesta busca!" });
          }

          // Resposta para o cliente enviando um objeto
          res.status(200).send({
               results: noticias.map((noticia) => ({
                    id: noticia._id,
                    titulo: noticia.titulo,
                    texto: noticia.texto,
                    banner: noticia.banner,
                    nome: noticia.user.nome,
                    login: noticia.user.login,
                    likes: noticia.likes,
                    comments: noticia.comments,
               }))     
          });
     } catch (error) {
          res.status(500).send({ message: error.message });
     }

}

// Função para buscar registros por ID
const buscarPorId = async (req, res) => {
     try {
          // Aqui passamos o parâmetro para rota
          const {id} = req.params;
          // console.log(id);

          // Variável para receber o registro vindo do banco de dados, além de passarmos o parâmetro para função 
          const noticia = await NoticiaService.buscarPorId(id);

          // Verificar se existe algum registro vindo do banco de dados
          if (!noticia) {
               return res.status(400).send({ message: "Nenhum registro cadastrado!" });
          }

          // Resposta para o cliente enviando um objeto
          res.status(200).send({
               noticia:{
                    id: noticia._id,
                    titulo: noticia.titulo,
                    texto: noticia.texto,
                    banner: noticia.banner,
                    likes: noticia.likes,
                    comments: noticia.comments,
                    nome: noticia.user.nome,
                    username: noticia.user.username,
               },
          });
     } catch (error) {
          res.status(500).send({ message: error.message });
     }

}

// Função para buscar noticias por usuario - especifica da api
const buscarNoticiasPorUsuario = async (req, res) => {
     try {
          // Aqui passamos o parâmetro para rota sem ser desconstruido pois está vindo direto do midlleware de autenticacao
          const id = req.userId;        

          const noticias = await NoticiaService.buscarNoticiasPorUsuario(id);        

          // Resposta para o cliente enviando um objeto com varios registros
          return res.status(200).send({
               results: noticias.map((noticia) => ({
                    id: noticia._id,
                    titulo: noticia.titulo,
                    texto: noticia.texto,
                    banner: noticia.banner,
                    nome: noticia.user.nome,
                    login: noticia.user.login,
                    likes: noticia.likes,
                    comments: noticia.comments,
               }))     
          });
          
     }catch (error){
          res.status(500).send({ message: error.message });
     }
}
// Função para excluir registros por ID
const excluir = async (req, res) => {
     try {
          // Aqui passamos o parâmetro para rota
          const id = req.params.id;

          // Aqui chamamos o service para buscarPorId o registro no banco de dados, passando o id 
          const noticias = await NoticiaService.buscarPorId(id);

          if (noticias.user.id != req.userId) {
               return res.status(400).send({ message: "Você não tem permissão para excluir este registro!" });
          }        

          // Aqui chamamos o service para excluir o registro no banco de dados, passando o id e os dados
          await NoticiaService.excluir(id);

          // Resposta para o cliente
          res.status(200).send({ message: "Registro excluido com sucesso!" });
     } catch (error) {
          res.status(500).send({ message: error.message });
     }

}

// Função para editar registros
const editar = async (req, res) => {
     try {
          //Receber os dados de um formulário através do body e descontruir por que o body é um objeto
          const { titulo, texto, banner } = req.body;

          // Aqui passamos o parâmetro para rota
          const id = req.params.id;

          // Validar dados
          if (!titulo && !texto && !banner) {
               res.status(400).send({ "message": "Preencher pelo menos um dos campos!" });
          }

          // Aqui chamamos o service para buscarPorId o registro no banco de dados, passando o id 
          const noticias = await NoticiaService.buscarPorId(id);

          if (noticias.user.id != req.userId) {
               return res.status(400).send({ message: "Você não tem permissão para editar este registro!" });
          }        

          // Aqui chamamos o service para atualizar o registro no banco de dados, passando o id e os dados
          await NoticiaService.editar(id, titulo, texto, banner);

          // Resposta para o cliente
          res.status(200).send({ message: "Registro atualizado com sucesso!" });
     } catch (error) {
          res.status(500).send({ message: error.message });
     }

}

export default { create, listar, buscarPorId, excluir, editar, topNews, buscarPorTitulo,buscarNoticiasPorUsuario }