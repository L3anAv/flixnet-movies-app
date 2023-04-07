import './index.css'
import styled from 'styled-components'
import Menu from './components/menu/menu'
import Slider from './components/slider/Slider'

const Contenedor = styled.div`
    display:flex;
`



/* Contenedor de app, define el grid de la aplicacion */

function App() {

  return (
    <>
      <Menu />
      <Slider />
    </>
  )
}

export default App
