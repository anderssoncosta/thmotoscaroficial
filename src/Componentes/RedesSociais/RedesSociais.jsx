import { TiSocialFacebook } from 'react-icons/ti';
import { SlSocialInstagram } from 'react-icons/sl';
import { BsWhatsapp } from 'react-icons/bs';

import styled from 'styled-components';

const ContainerSeguro = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5%;

    @media screen and (max-width: 768px){
        gap: 20px;
        flex-direction: column-reverse;

    }
    
`

const ContainerImg = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 100%;
    } 

    @media screen and (max-width: 768px){
       img{
        width: 70%;     
        } 
    }
`
    

const RedesSociaisContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        text-transform: uppercase;
        color: #FFF;
    }

    a{
        background-color: #e9ac2c;
        color: #000;
        border-radius: 50%;
        margin-top: 10px;
        font-size: 50px;
        padding: 10px;
        width: 60px;
        height: 60px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media screen and (max-width: 425px){
        a{
            width: 40px;
            height: 40px;
        }
    }
`

const RedesSociaisIcon = styled.div`
    display: flex;
    gap: 15px;
`

const Vertical = styled.div`
    height: 145px;
    width: 2px;
    background-color: #FFF;

    @media screen and (max-width: 768px){
        display: none;
    }
`

const Rodape = styled.div`
    text-align: center;
    width: 100%;
    height: auto;
    margin-top: 5%;
   
    p{
        text-transform: uppercase;
        color: #fff; 
    }

    @media screen and (max-width: 428px){
        p{
            font-size: 12px;
        }
    }
`

const RedesSociais = () => { 
    return(
        <>
        <ContainerSeguro>
            <ContainerImg>
                <img src="/imagens/siteseguro.png" alt="Site 100% Seguro" />
            
            </ContainerImg>

            <div>
                <Vertical/>
            </div>

        
            <RedesSociaisContainer>
                <h1>Mais informações</h1>
            
            <RedesSociaisIcon>

            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.instagram.com/thmotoscar/"
                                >
                                    <SlSocialInstagram/>
                                {/* <i class="fa-brands fa-instagram"></i> */}
                                </a>
                                <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="mailto:anderssoncosta6@gmail.com"
                                >
                                    <TiSocialFacebook/>
                                </a>
                                <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://wa.me/5585989635371"
                                >
                                <BsWhatsapp/>
                                </a>
                            </RedesSociaisIcon>
            </RedesSociaisContainer>

        
        </ContainerSeguro>
        
        <Rodape>
                <p className="texto_rodape">@2023 TH MOTOSCAR, TODOS OS DIREITOS RESERVADOS.</p>
        </Rodape>

    </>

    )
}

export default RedesSociais