import '../../../../globals.css' 

export default function Products ({nome, nota, valor, productImg}:any){
 
   return(
      <div className="Products">
         <div className="img" > 
            <img src={productImg} alt="" />
         </div>
         <div className="infoCard">
            <div className="datasCards">
               <span>{nome}</span>
               <p>{nota}</p>
            </div>
            <div className="cardPrice">
               <span>{valor}</span>
            </div>
         </div>
      </div>
   
   )
}