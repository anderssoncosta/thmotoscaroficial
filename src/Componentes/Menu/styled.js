import styled from "styled-components"

export const ContainerMenu = styled.div`
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
        height: auto;
        padding: 40px 0;
    }

    @media screen and (max-width: 640px){
        height: auto;
        padding: 40px 0;
    }
    @media screen and (max-width: 428px){
        height: auto;
        padding: 20px 0;
    }

`
export const Logo = styled.div`
   
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
        display: none;
        
        /* width: 50%;
        align-items: center;
        
        .logo_img{
            width: 40%;
            transform: none;
        } */
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
export const NavMenu = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    

    a{
        text-transform: capitalize;
        /* font-size: 1.25rem; */
        font-size: 1.2vw;
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
            font-size: 1.5vw;
        }

    }
    @media screen and (max-width: 940px){
        width: 70%;
        a{
            /* font-size: 1rem; */
            font-size: 1.7vw;
        }

    }
    @media screen and (max-width: 768px){
        display: flex;
        justify-content: center;
        
        a{
            font-size: 2.1vw;
        }
    }
`
