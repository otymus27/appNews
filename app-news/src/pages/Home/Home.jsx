import { Card } from "../../components/Card/Card";
import { Navbar } from "../../components/NavBar/Navbar";
import { noticias } from "../../Datas";
import { HomeBody } from "./HomeStyled";

export default function Home() {
  return (
    <>
          <Navbar />
          <HomeBody>
              {noticias.map((item, index)=>{
                // aqui envio as noticias através das props
                return <Card key={index} noticias = {item} />;
              })}
          </HomeBody>
          
                 
    </>
  );
}
