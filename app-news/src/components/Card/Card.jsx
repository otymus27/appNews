import { CardBody, CardContainer, CardFooter } from "./CardStyled.jsx";

export function Card({ noticias }) {
  return (
    <>
      <CardContainer>
        <CardBody>
          <div>
               <h2>{noticias.titulo}</h2>
               <p>{noticias.texto}</p>               
          </div>     
          <img src={noticias.banner} alt="Imagem" />     
        </CardBody>

        <CardFooter>
          <div>
               <i className="bi bi-hand-thumbs-up"></i>
               <span>{noticias.likes}</span>
          </div>

          <div>
               <i className="bi bi-chat"></i>
               <span>{noticias.comments}</span>
          </div>
          
          
        </CardFooter>
      </CardContainer>
    </>
  );
}
