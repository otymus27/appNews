import { Card } from "../../components/Card/Card";
import { Navbar } from "../../components/NavBar/Navbar";
// import { noticias } from "../../Datas";
import { HomeBody } from "./HomeStyled";
import { listar } from "../../services/noticiaServices";
import { useEffect, useState } from "react";

export default function Home() {
  const [noticias, setNoticias] = useState([]);


  async function listarNoticias() {
    const response = await listar();
    setNoticias(response.data.results);
  }

  //listarNoticias();
  useEffect(() => {
    listarNoticias();
  }, []);
  console.log(noticias);


  return (
    <>
          <Navbar />
          <HomeBody>
              {noticias.map((item)=>(
                // aqui envio as noticias através das props ou propriedades
              <Card 
                  key={item.id} 
                  titulo = {item.titulo} 
                  texto = {item.texto}
                  imagem = {item.imagem}                   
                  banner = {item.banner}
                  likes = {item.likes.length}
                  comments = {item.comments.length} 
                />
              ))}
          </HomeBody>
          
                 
    </>
  );
}
