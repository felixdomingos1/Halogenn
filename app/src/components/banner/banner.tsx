import variables from  '@/app/variables.module.scss'
import Cards from '../cards/cards'

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
               background:variables.bannerBackground,
               width:'78%',
               height:'500px',
               position:'absolute',
               top:'30%',
               left:'11%',
               display:'flex'
            }}
         > 
         <Cards />
         <Cards />
         <Cards />
         </div>
      </>
   )
}