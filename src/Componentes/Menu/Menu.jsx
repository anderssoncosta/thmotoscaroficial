import styled from "styled-components"

const ContainerMenu = styled.div`
    position: relative;
    width: 100%;
    height: 130px;
    display: flex;
    justify-content: space-around;
    background: linear-gradient(90deg,rgba(0,0,0,1) 47%,rgba(138,96,23,1) 75%);

    @media screen and (max-width: 1024px){
        height: 90px;
        
    }
    
    @media screen and (max-width: 768px){
        height: 130px;
        
    }

    @media screen and (max-width: 640px){
        height: 180px;

    }
    @media screen and (max-width: 428px){
        height: 140px;

    }

`
const Logo = styled.div`
   
    width: 50%;
    display: flex;
    flex-direction: column;


    .logo_img{
        width: 20%;
        transform: translate(120%, -5%);

    }

    @media screen and (max-width: 1024px){
        width: 50%;
        

        .logo_img{
            width: 25%;
        }
    }

    @media screen and (max-width: 768px){
        width: 50%;
        align-items: center;
        
        .logo_img{
            width: 40%;
            transform: none;
        }
    }

    @media screen and (max-width: 640px){
        width: 60%;
        align-items: center;
        
        .logo_img{
            width: 40%;
            transform: none;
        }
    }

    @media screen and (max-width: 428px){
        .logo_img{
            width: 50%;
            transform: none;
        }

    }

`
const NavMenu = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    

    a{
        text-transform: capitalize;
        font-size: 1.25rem;
        color: #FFF;
        border-radius: 0;
        border-width: inherit;
        border-bottom: solid 2px  #DFC443;
        text-decoration: none;
        padding: 0 1.5%;
        text-transform: uppercase;
        font-weight: bold;
        gap: 30px;
        display: flex;

        &:hover{
            color: #DFC443;
        }
    }

    @media screen and (max-width: 1024px){
        a{
            font-size: 1rem;
        }

    }
    @media screen and (max-width: 940px){
        width: 70%;
        a{
            font-size: 1rem;
        }

    }
    @media screen and (max-width: 768px){
        display: none;
    }
`

const Menu = () => {

    return(
    <ContainerMenu id='PaginaInicial'>
            
            <Logo>
                <img className='logo_img' src="Imagens/logo.png" alt="Logo ThMotosCar" />
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