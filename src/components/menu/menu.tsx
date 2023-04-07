import { useState, useMemo } from "react"
import styled from "styled-components"
import Icono from "../iconoMenu/icono"
import useWindowSize from "../../hooks/useWindowSize"
import Home from "../../../public/assets/svg/home_3_fill.svg"
import Heart from "../../../public/assets/svg/heart_fill.svg"
import Arrow from "../../../public/assets/svg/right_fill.svg"
import Setting from "../../../public/assets/svg/settings_4_fill.svg"
import Notification from "../../../public/assets/svg/notification_fill.svg"
import Profile from "../../../public/assets/svg/profile-circle-svgrepo-com.svg"

interface Styled{
    height: string, 
    traslado: string
}

const MenuContenedor = styled.div<Styled>`
    diplay:flex;
    width:40px;
    height:${({height}) => height};
    max-height:85vh;
    background:#fff;
    min-height:360px;
    border-radius:25px;
    position: absolute;
    top:5%;
    left:1%;
    transform:${({traslado}) => `translateX(${traslado})`};
    transition:transform ease 0.5s;

   /* Sombra */
   box-shadow: -2px 7px 18px 0px rgba(0,0,0,0.23);
   -webkit-box-shadow: -2px 7px 18px 0px rgba(0,0,0,0.23);
   -moz-box-shadow: -2px 7px 18px 0px rgba(0,0,0,0.23);

    div{
        display:flex;
        width:100%;
        heigth:100%;
        padding-top:10px;
        padding-left:10px;
        flex-direction:column;
    }
`

const Menu= () => {
    
    const size = useWindowSize()
    const [vistaMovil, setvistaMovil] = useState<boolean>(false)
    const [menuDesplegado, setMenuDesplegado] = useState<boolean>(false)
    const [transladoMenu, setTransladoMenu] = useState<string>('-32px')

    const handleOnClick = () => {
        if(!menuDesplegado){
            setMenuDesplegado(true)
            setTransladoMenu('0')
        }else{
            setMenuDesplegado(false)
            setTransladoMenu('-32px')
        }
    }

    useMemo(
    () => {
        if(size.width < 800){
            setvistaMovil(true)
        }else{
            setvistaMovil(false)
        }
    }, [size.width])

    return (
    <>
    
        <MenuContenedor 
        height={vistaMovil === true ? '390px' : '80vh'} 
        traslado={vistaMovil === true ? transladoMenu : '0'}>
            {vistaMovil && <Icono handleOnClick={handleOnClick} PATH={Arrow} Name={"Arrow"}/>}
            <div>
            <Icono PATH={Home}/>
            <Icono PATH={Heart}/>
            <Icono PATH={Setting}/>
            <Icono PATH={Notification}/>
            </div>
            <div>
                <Icono PATH={Profile} Name={"Profile"} />
            </div>
        </MenuContenedor>
    </>
    )
}

export default Menu