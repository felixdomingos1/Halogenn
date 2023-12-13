import variables from './variables.module.scss'
 
export default function Page() {
  return (
    <>
      <div className="header" style={
            { 
              background: variables.Background, 
              width:variables.headerWidth,
              height:variables.headerHeight, 
            }}>
      <h1 ></h1>
      </div>
    </>
  )
}