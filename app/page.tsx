import Banner from './src/components/banner/banner'
import Container from './src/components/container/container'
import Header from './src/components/header/header'
import variables from './variables.module.scss'
 
export default function Page() {
  return (
    <>
      <Header/>
      <Banner/> 
      <Container/>
    </>
  )
}