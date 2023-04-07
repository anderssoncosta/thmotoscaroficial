import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    background: linear-gradient(90deg, rgba(0,0,0,1) 47%, rgba(138,96,23,1) 75%);
    background-size: cover;

    img{
        width: 100%;
        background-size:cover    
    }
    @media screen and (max-width: 768px){
        display: none;
    }
`

export const ContainerMobile = styled.div`
    display: none;

    
    
    @media screen and (max-width: 768px){

        display: flex;
        /* background: linear-gradient(90deg, rgba(0,0,0,1) 47%, rgba(138,96,23,1) 75%); */
        background-size: cover;

        img{
          width: 100%;
          background-size:cover;
          transform: translate(0%, -10%);    
        }
    }
    


`