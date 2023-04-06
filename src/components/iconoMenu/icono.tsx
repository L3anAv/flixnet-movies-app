import styled from "styled-components"

const IconoSvg = styled.img<{Name?: string}>`
    width:${({Name}) => (Name === "Profile" ? '32px' : Name === "Arrow" ? '32px' : '20px')};
    margin-top:15px;
    margin-bottom:15px;
    bottom: ${({Name}) => (Name === "Profile" ? '.3rem' :'0')};
    background:${({Name}) => (Name === "Arrow" ? '#fff' :'none')};
    border-radius:${({Name}) => (Name === "Arrow" ? '20px' :'0')};
    margin-left:${({Name}) => (Name === "Profile" ? '-14%' : Name === "Arrow" ? '8%' : '1%')};
    position: ${({Name}) => (Name === "Profile" ? 'absolute' : 'none')};
    transform:${({Name}) => (Name === "Arrow" ? 'translateX(12px)' :'none')};

    &:Hover{
      margin-left:${({Name}) => (Name === "Profile" ? '-14.8%' : Name === "Arrow" ? '10%' : '0.5%')};
      width:${({Name}) => (Name === "Profile" ? '33px' : Name === "Arrow" ? '32px' : '22px')};
    }
`

interface Props{
    PATH: string;
    Name?: string;
    handleOnClick?: React.MouseEventHandler<HTMLImageElement>;
}

const Icono = ({PATH, Name, handleOnClick}: Props) => {

  return (
    <>
        <IconoSvg onClick={handleOnClick} src={PATH} Name={Name} />
    </>
  )
}

export default Icono