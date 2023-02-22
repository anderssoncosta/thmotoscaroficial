import styled from 'styled-components';

import { TiSocialFacebook } from 'react-icons/ti';
import { SlSocialInstagram } from 'react-icons/sl';
import { BsWhatsapp } from 'react-icons/bs';


const ContainerContato = styled.div`
    background-color: #000;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;

`

const CaixaContato = styled.div`
    width: 100%;
    max-width: 90%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 20px 20px;

    @media screen and (max-width: 1024px){
        flex-direction: column;
    }
`
const ContatoForm = styled.form`
    width: 40%;
    display: flex;
    flex-direction: column;
    

    .first{
        /* width: 300px; */
        text-transform: uppercase;
        color: #FFFFFF;
        font-size: 4.35vw;
        margin-bottom: 0;
        font-weight: 900;
        align-items: flex-start;

    }
    .second{
        /* width: 300px; */
        text-transform: uppercase;
        color: #e9ac2c;
        font-size: 4.35vw;
        margin-top: 0;
        font-weight: 900;
        text-shadow: 0px 0px 55px #ffd300;

    }
    

    p{
        width: 60%;
        color: #FFF;
        margin: 5px 0;
        font-size: 2vw;
    }

    @media screen and (max-width: 1024px){
        width: 100%;
        align-items: center;
        margin: 20px 20px;

        .first{
            font-size: 6.35vw;
        }

        .second{
            font-size: 6.35vw;
        }

        p{
            text-align: center;
            width: 100%;
            font-size: 3vw;
            
        }
    }

    @media screen and (max-width: 640px){
        .first{
            font-size: 3rem;
        }
        .second{
            font-size: 3rem;
        }

        p{
            font-size: 2rem;
        }
    }

    @media screen and (max-width: 425px){
        .first{
            font-size: 2.5rem;
        }
        .second{
            font-size: 2.5rem;
        }
        p{
            font-size: 4.5vw;
        }
    }
`

const RedesSociais = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-start;

    a{
        background-color: #e9ac2c;
        color: #000;
        border-radius: 50%;
        margin-top: 10px;
        margin-right: 15px;
        margin-bottom: 42px;
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

const Mapa = styled.div`
    width: 40%;
    display: flex;

    iframe{
        height: 450px;
        border: none;
        border-radius: 50px;
        display: flex;
        margin: 20px 0;
        box-shadow: 0px 0px 38px #ffd300;
    }

    @media screen and (max-width: 1024px){
        width: 70%;
    }
    @media screen and (max-width: 425px){
        justify-content: center;
        iframe{
            height: 300px;
        }
    }
`

const Rodape = styled.div`
    text-align: center;
    width: 100%;
    background-color: #000;
   
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



const Contato = () => {
    return(
    <ContainerContato id="Contato">
        <CaixaContato>
                <ContatoForm>
                        <h1 className="first">Onde</h1>
                        <h1 className="second">Estamos?</h1>
                        <p>
                        R. Um, 853  Loja: 01 - 1 Fortaleza - CE 60767-725
                        </p>
                        

                        <RedesSociais>
                            
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
                        </RedesSociais>
                </ContatoForm>

                    <Mapa>
                        <iframe
                            
                            title="Mapa"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15923.943807041376!2d-38.5780498!3d-3.8131142!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfd956f24ef564d9b!2sTH%20Motos%20Car!5e0!3m2!1spt-BR!2sbr!4v1673097569692!5m2!1spt-BR!2sbr"
                            width={window.innerWidth}
                            height="350"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </Mapa>
        </CaixaContato>

        <Rodape>
            <p className="texto_rodape">@2023 TH MOTOSCAR, TODOS OS DIREITOS RESERVADOS.</p>
        </Rodape>
    </ContainerContato>
    )
}

export default Contato