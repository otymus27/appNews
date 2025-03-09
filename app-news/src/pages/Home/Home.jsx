import { Card } from "../../components/Card/Card";
import { Navbar } from "../../components/NavBar/Navbar";
// import { noticias } from "../../Datas";
import { HomeBody, HomeHeader } from "./HomeStyled";
import { listar, listarTopNoticias } from "../../services/noticiaServices";
import { useEffect, useState } from "react";

export default function Home() {
  const [noticias, setNoticias] = useState([]);
  //Criar um novo estado para controlar as alterações em cima de um objeto, por isso o {}
  const [topNoticias, setTopNoticias] = useState({});



  async function listarNoticias() {
    const response = await listar();
    setNoticias(response.data.results);

    const topResponse = await listarTopNoticias();    
    setTopNoticias(topResponse.data.noticia);
    console.log(topResponse.data.noticia);
  }

  //listarNoticias();
  useEffect(() => {
    listarNoticias();
  }, []);

  return (
    <>
          <Navbar />

          <HomeHeader>
              <Card  
                top={true}               
                titulo = {topNoticias.titulo} 
                texto = {topNoticias.texto}                                 
                banner = {topNoticias.banner}
                likes = {topNoticias.likes}
                comments = {topNoticias.comments} 
              />
          </HomeHeader>

          <HomeBody>
              {noticias.map((item)=>(
                // aqui envio as noticias através das props ou propriedades
              <Card 
                  key={item.id} 
                  titulo = {item.titulo} 
                  texto = {item.texto}                                   
                  banner = {item.banner}
                  likes = {item.likes}
                  comments = {item.comments} 
                />
              ))}
          </HomeBody>
          
                 
    </>
  );
}
