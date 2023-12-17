import Products from "./products/products"; 
import '../../../globals.css'

export default function Container (){
   const products = [
      {
         id:1,
         nome:'Nome here',
         nota:'Nota 9.0',
         valor:'R$ 200.00',
         productImg:'/img/img1.png',
      },{
         id:2,
         nome:'Nome here',
         nota:'Nota 9.0',
         valor:'R$ 300.00',
         productImg:'/img/img2.png',
      },{
         id:3,
         nome:'Nome here',
         nota:'Nota 9.0',
         valor: 'R$ 90.00',
         productImg:'/img/img3.png' ,
      },
   ]
   return(
      <div style={
         {
            width:'78%',
            height:'400px',
            position:'absolute',
            top:'50rem',
            left:'11%',
            marginBottom: '4rem',
            display:'flex'
         }
      } className="Container">
         <div className="headerContainer">
            <span>PRODUTOS</span>
         </div>
         <div className="ProdutsContainer">
            {
               
               products.map((e)=>{
                  const { id, nome, nota, valor, productImg} = e
                  return(
                     <Products key={id} nome={nome} nota={nota} valor={valor} productImg={productImg}/>
                     )
               })
            }
         </div>
      </div>
   )
}