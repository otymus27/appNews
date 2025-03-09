//Função para limitar texto 
export function TextLimit({texto, limit}){
    //Quando colocamos ? quer dizer que pode ser nulo
    const textoLimitado = texto?.length > limit ? `${texto.substring(0, limit)}...` : texto;
    return <p>{textoLimitado}</p>
}