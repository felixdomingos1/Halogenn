import Products from "./products/products";


export default function Container (){

   return(
      <div style={
         {
            background: '#000',
            width:'78%',
            height:'500px',
            position:'absolute',
            top:'45rem',
            left:'11%',
            marginBottom: '4rem',
            display:'flex'
         }
      }>
         
         <Products/>
      </div>
   )
}