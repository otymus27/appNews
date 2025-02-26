const soma = (req, res)=>{
      //res.send("Rodando servidor backend na porta 3001!")   
      console.log("Rodando servidor backend na porta 3001!")  
      const soma = 100 + 1;
      let nome = "Fabio";
 
      // 1ª Forma de enviar arquivo json atraves da url   
      res.json({soma});
           
      // 2ª Forma de enviar arquivo json atraves da url   
      // res.send({
      //      nome: nome,          
      //      soma: soma
      // });
}

module.exports = { soma }