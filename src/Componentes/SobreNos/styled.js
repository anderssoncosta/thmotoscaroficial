import styled from "styled-components"

export const ContainerSobreNos = styled.div`
    position: relative;
    width: 100%;
    background-image: url(/imagens/fundosobrenos.png);
    background-position: center right;
    background-size: contain;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;

`

export const Sobre = styled.div`
    position: relative;
    width: 100%;
    max-width: 90%;
    /* margin: 3% 0; */
    gap: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
   
    
    .texto_sobre{
        width: 60%;
        text-align: justify;
        font-size: 25px;
    }
    .titulo_sobrenos{
        text-transform: uppercase;
        color: #FFFFFF;
        /* font-size: 70px; */
        font-size: 4.5vw;
        margin-bottom: 0;
    }
    .subtitulo_sobrenos{
        text-transform: uppercase;
        color: #e9ac2c;
        margin-top: 0;
        font-size: 70px;
        font-size: 4.5vw;
        font-weight: 900;
        text-shadow: 0px 0px 40px #ffd300;
    }
    
    .texto_sobrenos{
        color: #FFF;
        width: 100%;
        text-align: justify;
        /* font-size: 25px; */
        font-size: 1.8vw;
    }

    @media screen and (max-width: 1024px){
        display: flex;
        flex-direction: column;
        align-items: center;
        
        .texto_sobre{
            margin-top: 5%;
            width: 80%;
            
            h1{
                font-size: 5.5vw;
            }
            
            p{
                font-size: 2.5vw;
            }
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

    @media screen and (max-width: 425px){
        .texto_sobrenos{
            font-size: 4.5vw;
        }

        .texto_sobre{
            font-size: 4.5vw;
            h1{
                font-size: 8.5vw;
            }
                
            p{
                font-size: 4.5vw;
            }    
        }

    }

`

export const SobreImg = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: end;

    img{
        text-align: center;
        width: 100%;
    }

    @media screen and (max-width: 1024px){
        width: 50%;
    }

    @media screen and (max-width: 428px){
        width: 80%;
    }
`