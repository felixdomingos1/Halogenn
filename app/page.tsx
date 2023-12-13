import Header from './src/components/header'
import variables from './variables.module.scss'
 
export default function Page() {
  return (
    <>
      <div style={{ background: variables.Background, width:variables.headerWidth,height:variables.headerHeight, }}>
          <Header/>
      </div>
    </>
  )
}