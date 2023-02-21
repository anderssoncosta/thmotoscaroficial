import styled from "styled-components"

const ContainerSobreNos = styled.div`
    position: relative;
    width: 100%;
    background: #000;
    background-image: url(/imagens/fundosobrenos.png);
    background-position: center right;
    background-size: contain;
    background-repeat: no-repeat;
    display: flex;

`

const Sobre = styled.div`

    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    height: auto;
    align-items: center;
   
    
    .texto_sobre{
        width: 40%;
        text-align: justify;
        font-size: 25px;
    }
    .titulo_sobrenos{
        text-transform: uppercase;
        color: #FFFFFF;
        font-size: 70px;
        margin-bottom: 0;
    }
    .subtitulo_sobrenos{
        text-transform: uppercase;
        color: #e9ac2c;
        margin-top: 0;
        font-size: 70px;
        font-weight: 900;
        text-shadow: 0px 0px 55px #ffd300;
    }
    
    .texto_sobrenos{
        color: #FFF;
        width: 100%;
        text-align: justify;
        font-size: 25px;
    }

    @media screen and (max-width: 1024px){
        display: flex;
        flex-direction: column;
        
        .texto_sobre{
            margin-top: 5%;
            width: 80%;
        }        
    }

    @media screen and (max-width: 640px){
        display: flex;
        flex-direction: column;
        
        .texto_sobre{
            margin-top: 5%;
            width: 80%;
        }
        .titulo_sobrenos{
            font-size: 3rem;
        }
        .subtitulo_sobrenos{
            font-size: 3rem;    
        }        
    }

    @media screen and (max-width: 428px){
        .texto_sobrenos{
            font-size: 18px
        }
        .titulo_sobrenos{
            font-size: 2rem;
        }
        .subtitulo_sobrenos{
            font-size: 2rem;    
        }    
    }

`

const SobreImg = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        text-align: center;
        width: 80%;
    }

    @media screen and (max-width: 1024px){
        width: 50%;
    }

    @media screen and (max-width: 428px){
        width: 80%;
    }
`

const SobreNos = () => {
    return(
    
    <ContainerSobreNos>
            <Sobre id='SobreNos'>
                <div className="texto_sobre">
                    <h1 className='titulo_sobrenos'>Quem é</h1>
                    <h1 className='subtitulo_sobrenos'>thmotoscar?</h1>
                    <p className="texto_sobrenos">A TH Motos Car é uma empresa localizado em fortaleza, especializada na compra, venda e troca de motos de todas as cilindradas, trabalhamos com 0km, seminovas e usadas e também começamos com carros seminovos e novos. trabalhamos sempre focados na satisfação de nossos clientes com qualidade e procedência. Venha nos visitar e confira nosso amplo estoque de motos e carros!</p>
                </div>

                <SobreImg>
                    <img className='img_sobrenos' src="/imagens/imagemsobrenos.png" alt="Imagem Sobre Nos" />
                </SobreImg>
            </Sobre>

        </ContainerSobreNos>

    )
}

export default SobreNos