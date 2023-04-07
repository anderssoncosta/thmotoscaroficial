import { Container, ContainerMobile } from "./styled"

const Banner = () => {
    return(
    <>
        <Container>
            <img className='banner_principal' src="imagens/bannerprincipal.png" alt="Banner" />
        </Container>

        <ContainerMobile>
            <img className='banner_principal' src="imagens/banner-mobile2.png" alt="Banner" />
        </ContainerMobile>
    </>

    )
}

export default Banner