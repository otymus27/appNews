import {noticias} from '../../Datas.js';

export function Card ({noticias}){
   
     return (
          <>
               <section>
                    <h2>{noticias.titulo}</h2>
                    <p>{noticias.texto}</p>
                    <img src={noticias.banner} alt="Imagem" />
                    <i className="bi bi-hand-thumbs-up"></i>
                    <span>{noticias.likes}</span>
                    <i className="bi bi-chat"></i>
                    <span>{noticias.comments}</span>
               </section>
               
          </>
     );
}