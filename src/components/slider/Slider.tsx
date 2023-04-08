import styled from 'styled-components'
import {useState, useEffect} from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import useObtenerMovie from '../../hooks/useObtenerMovie'
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
    top:-45px;
    left: ${props => props.left}px;
    color:${(props) => (props.active ? '#FDF0D5' : '#003049')};
`

const Slider = () => {

    const movies = useObtenerMovie(`${API_DB_MOVIE_POPULARES}`)

    const [moviesSlider, setMoviesSLider] = useState([])
    const [currentSlider, setcurrentSlider] = useState(0)
    const[sliderActual, setSliderActual] = useState<{backdrop_path: string}>()
    
    useEffect(() => {
      if(movies.isSuccess){
        const postersMovies = movies.data.slice(0,5)
        
        setMoviesSLider(postersMovies)
      }
    }, [movies.isSuccess])
    
    useEffect(() => {
        setTimeout(() => {
            if(currentSlider < 4){
                setcurrentSlider(currentSlider + 1)
            }else{
                setcurrentSlider(0)
            }
        }, 10000);

        setSliderActual(moviesSlider[currentSlider])
    })

    if(movies.isLoading){
        return (
            <ContenedorSlider>
                <Skeleton width={450} height={'45vh'} baseColor="#bcbcbc" borderRadius="30px" duration={2} />
            </ContenedorSlider>
        )
    }

    if(movies.isSuccess){
    return (
        <ContenedorSlider>
            {<ImgSlider src={`${API_IMG}${sliderActual?.backdrop_path}`}/>}
            <BotonInfo><img src={Ticket}/>Mas Informacion</BotonInfo>
            {moviesSlider.map((movie, index) => (
          <SliderMarker key={index} left={index*20} active={index === currentSlider}>.</SliderMarker>
        ))}
        </ContenedorSlider>
    )}
    
}

export default Slider;