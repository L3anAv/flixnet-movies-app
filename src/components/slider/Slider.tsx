import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import useObtenerMovie from '../../hooks/useObtenerMovie';
import Ticket from '../../../public/assets/svg/coupon_fill.svg'
import {API_DB_MOVIE_POPULARES, API_IMG} from "../../utils/apiHelpers"

const ContenedorSlider = styled.div`
    width:auto;
    display:flex;
    height:50vh;
    padding-top:2%;
    margin-left:5%;
    max-height:55vh;
    overflow:hidden;
    min-height:180px;
    flex-direction:row;
    position:relative;
`

const ImgSlider = styled.img`
    object-fit: cover;
    border-radius:30px;
`
const BotonInfo = styled.button`
    width:210px;
    position:absolute;
    top:83%;
    left:2%;
    height:40px;
    border:none;
    outline:none;
    color:#003049;
    background:#fdebc8; 
    border-radius:10px;
    font-family:Manjari;
    padding-top:4px;
    font-size:20px;
    aling-text:center;
    font-weight:800;

    img{
        with:8px;
        margin-right:8px;
        vertical-align: middle;
    }

    &:Hover{
        background:#FDF0D5;
    }
`

const SliderMarker = styled.p<{left: number, active: boolean}>`
    font-size:60px;
    font-family:Manjari;
    margin-left:10px;
    position:absolute;
    top:-40px;
    left: ${props => props.left}px;
    color: ${props => props.active ? "red" : "gray"};
`

const Slider = () => {

    const movies = useObtenerMovie(`${API_DB_MOVIE_POPULARES}`)

    const [index, setIndex] = useState(0)
    const [moviesSlider, setMoviesSLider] = useState([])
    const[sliderActual, setSliderActual] = useState<{backdrop_path: string}>()
    
    useEffect(() => {
      if(movies.isSuccess){
        const postersMovies = movies.data.slice(0,5)
        setMoviesSLider(postersMovies)
      }
    }, [movies.isSuccess])
    
    useEffect(() => {
        setTimeout(() => {
            if(index < 4){
                setIndex(index + 1)
            }else{
                setIndex(0)
            }
        }, 10000);

        setSliderActual(moviesSlider[index])
    })

    if(movies.isLoading) return <div>Cargando..</div>
    
    if(movies.isSuccess){
    return (
        <ContenedorSlider>
            {<ImgSlider src={`${API_IMG}${sliderActual?.backdrop_path}`}/>}
            <BotonInfo><img src={Ticket}/>Mas Informacion</BotonInfo>
            {moviesSlider.map((i, inx) => (
                <SliderMarker key={inx} left={i * 20} active={inx === index}>.</SliderMarker>
            ))}
        </ContenedorSlider>
    )}

}

export default Slider;