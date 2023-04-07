import { ContainerMenu, Logo, NavMenu } from "./styled"


const Menu = () => {

    return(
    <ContainerMenu id='PaginaInicial'>
            
            <Logo>
                <img className='logo_img' src="../imagens/logo.png" alt="Logo ThMotosCar" />
            </Logo>
            
            <NavMenu>

                <a className='link_nav btn' href="#PaginaInicial">Página Inicial</a>
                <a className='link_nav btn' href="#SobreNos">Sobre Nós</a>
                <a className='link_nav btn' href="#NossaLoja">Nossa Loja</a>
                <a className='link_nav btn' href="#Contato">Contatos</a>
            </NavMenu>
        </ContainerMenu>
    )

}

export default Menu