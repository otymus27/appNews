import { CardBody, CardContainer, CardFooter } from "./CardStyled.jsx";
import { TextLimit } from "../TextLimit/TextLimit.jsx";


export function Card( props ) {
  return (
    <>
      <CardContainer>
        <CardBody>
          <div>
               <h2>{props.titulo}</h2>
               <img src={props.banner} alt="Imagem" />                             
          </div>  
          <TextLimit texto={props.texto} limit={200}/>     
             
        </CardBody>

        <CardFooter>
          <div>
               <i className="bi bi-hand-thumbs-up"></i>
               <span>{props.likes}</span>
          </div>

          <div>
               <i className="bi bi-chat"></i>
               <span>{props.comments}</span>
          </div>
          
          
        </CardFooter>
      </CardContainer>
    </>
  );
}
