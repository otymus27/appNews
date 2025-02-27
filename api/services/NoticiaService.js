import Noticias from "../models/Noticias.js";

const create = (body) => Noticias.create(body);

const listar = () => Noticias.find();

const buscarPorId = (id) => Noticias.findById(id);

const excluir = (id) => Noticias.findByIdAndDelete(id);

const editar = (id, titulo, texto, banner, user, likes, comments) => Noticias.findOneAndUpdate(
     { _id: id },
     { titulo, texto, banner, user, likes, comments },
);


export default { create, listar, buscarPorId, editar, excluir };