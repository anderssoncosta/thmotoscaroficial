import styled from "styled-components"

const Container = styled.div`
    display: flex;
    background: linear-gradient(90deg, rgba(0,0,0,1) 47%, rgba(138,96,23,1) 75%);
    background-size: cover;

    img{
        width: 100%;
        background-size:cover    
    }
`

const Banner = () => {
    return(

        <Container>
            <img className='banner_principal' src="imagens/bannerprincipal.png" alt="Banner" />
        </Container>

    )
}

export default Banner