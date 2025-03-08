//Função para limitar texto 
export function TextLimit({texto, limit}){
    const textoLimitado = texto.length > limit ? `${texto.substring(0, limit)}...` : texto;
    return <p>{textoLimitado}</p>
}