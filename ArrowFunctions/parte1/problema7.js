let filtrarPlanos = (planos, arrancarNave) =>{
   
    let filtro= planos.filter(let = (plano) => {
         return(plano>=1 && plano<=10)
 
     })
     arrancarNave(filtro)
 }
 let planos=[1,101,200,400,500]

 filtrarPlanos(planos, let = (filtro) =>{
     let cuenta=filtro.length
     
 
     if(cuenta>0){
         console.log('Arrancando la nave')
     }else{
         console.log('Buscando planos')
     }
    
 })