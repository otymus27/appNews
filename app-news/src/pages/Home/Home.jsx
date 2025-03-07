import { Card } from "../../components/Card/Card";
import { Navbar } from "../../components/NavBar/Navbar";
import { noticias } from "../../Datas";

export default function Home() {
  return (
    <>
          <Navbar />
          {noticias.map((item, index)=>{
            // aqui envio as noticias através das props
            return <Card key={index} noticias = {item} />;
          })}
                 
    </>
  );
}
