import styled from 'styled-components';

export const ContainerSeguro = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5%;

    @media screen and (max-width: 768px){
        gap: 20px;
        flex-direction: column-reverse;

    }
    
`

export const ContainerImg = styled.div`
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
    

export const RedesSociaisContainer = styled.div`
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

export const RedesSociaisIcon = styled.div`
    display: flex;
    gap: 15px;
`

export const Vertical = styled.div`
    height: 145px;
    width: 2px;
    background-color: #FFF;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const Rodape = styled.div`
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