import { ContainerImg, ContainerSeguro, RedesSociaisContainer, RedesSociaisIcon, Rodape, Vertical } from './styled';

import { TiSocialFacebook } from 'react-icons/ti';
import { SlSocialInstagram } from 'react-icons/sl';
import { BsWhatsapp } from 'react-icons/bs';


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