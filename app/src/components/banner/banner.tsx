import variables from  '@/app/variables.module.scss'
import Cards from '../cards/cards'
import MiddlCards from '../cards/middleCard'

export default function Banner() {
   // const data = [
   //    {
   //       id:1,
   //       backgroudWhite:'red',
   //    },
   //    {
   //       id:2,
   //       backgroudOrange:'orange',
   //    }, 
   // ]
   return(
      <>
         <div className="banner" 
            style={{
               width:'78%',
               height:'500px',
               position:'absolute',
               top:'13rem',
               left:'11%',
               marginBottom: '4rem',
               display:'flex'
            }}
         > 
         <Cards />
         <MiddlCards />
         <Cards />
         </div>
      </>
   )
}