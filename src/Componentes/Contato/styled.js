import styled from 'styled-components';

export const ContainerContato = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;

`
export const CaixaContato = styled.div`
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
export const ContatoForm = styled.form`
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
        color: #f6d549;
        font-size: 4.35vw;
        margin-top: 0;
        font-weight: 900;
        text-shadow: 0px 0px 30px #ffd300;

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
export const Mapa = styled.div`
    width: 40%;
    display: flex;

    iframe{
        height: 450px;
        border: none;
        border-radius: 60px;
        display: flex;
        margin: 20px 0;
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