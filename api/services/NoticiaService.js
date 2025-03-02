import Noticias from "../models/Noticias.js";

const create = (body) => Noticias.create(body);

//const listar = (offset, limit) => Noticias.find().limit(limit).skip(offset).sort( { titulo: -1 });

//listagem com dados dos usuarios
const listar = (offset, limit) => Noticias.find().limit(limit).skip(offset).sort( { titulo: -1 }).populate("user");

// Função para contar registros
const contarRegistros = () => Noticias.countDocuments();

// Função para trazer primeiro registro da lista em ordem descrescente
const topNews = () => Noticias.findOne().sort({_id: -1}).populate("user");

// Função para buscar registros por ID usando populate para trazer dados do usuario tambem, tabela estrangeira
const buscarPorId = (id) => Noticias.findById(id).populate("user");

// Função para buscar registros por titulo usando populate para trazer dados do usuario tambem, tabela estrangeira
const buscarPorTitulo = (titulo) => 
     Noticias.find({
     titulo: {$regex: `${titulo || ""}`,$options: "i"},     
}).sort({_id: -1}).populate("user");


// Função para buscar registros por usuarios 
const buscarNoticiasPorUsuario = (id) => Noticias.find({user: id}).sort({_id: -1}).populate("user");

// Funçao para fazer update de registros
const editar = (id, titulo, texto, banner) => Noticias.findOneAndUpdate(
     { _id: id },
     { titulo, texto, banner },
);

// Funçao para fazer delete de registros
const excluir = (id) => Noticias.findByIdAndDelete(id);


export default { create, listar, buscarPorId, editar, excluir, contarRegistros, topNews, buscarPorTitulo, buscarNoticiasPorUsuario };