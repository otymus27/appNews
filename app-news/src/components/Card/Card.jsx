import { CardBody, CardContainer, CardFooter, CardHeader } from "./CardStyled.jsx";
import { TextLimit } from "../TextLimit/TextLimit.jsx";


export function Card( props ) {
  return (
    <>
      <CardContainer>
        <CardBody >           
            <div>
              <CardHeader top={props.top}>
                  <h2>{props.titulo}</h2>
                  <TextLimit texto={props.texto} limit={200}/>
              </CardHeader>

              <CardFooter>
                <section>
                    <i className="bi bi-hand-thumbs-up"></i>               
                    <span>{props.likes?.length}</span>
                </section>

                <section>
                    <i className="bi bi-chat"></i>
                    <span>{props.comments?.length}</span>
                </section> 
              </CardFooter>
            </div>           

            <img src={props.banner} alt="Imagem" /> 

        </CardBody>

              

            
      </CardContainer>
    </>
  );
}
