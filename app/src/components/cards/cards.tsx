import Image from "next/image";

export default function Cards ( {backGround, title, cardContent, contentImg} :any ) {
   let cardHeigth = '28rem'
   let contentColor='#313352'

   if(backGround == '#F5643D'){
         cardHeigth = '30rem'
         contentColor='#fff'
   }
   
   return (
      <div style={
         {
            height: cardHeigth,
            width:'calc(100%/3)',  
            background: backGround,
            padding:'80px 60px  ',
            display:'flex',
            justifyContent:'space-between',
            flexDirection:'column',
            color:contentColor ,
            fontFamily: 'DM Sans',
            fontSize: '18px',
            fontStyle: 'normal',
            fontWeight: '700',                                     
         }
      }>
         <h1>{title}</h1>

         <div style={{
            fontSize: '36px',
            fontStyle: 'normal',
            fontWeight: '500',
            color:contentColor                                          
         }}>
            {contentImg}
            {cardContent}</div>
      
      </div>
   )
}