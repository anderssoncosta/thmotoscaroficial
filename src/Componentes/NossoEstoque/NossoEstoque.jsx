import styled from "styled-components"


const ContainerNossaLoja = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #000;
    width: 100%;
    height: 800px;
    gap: 10%;

    position: relative;
    background-image: url(/imagens/fundonossoestoque.png);
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;

    @media screen and (max-width: 425px){
        height: 600px;
    }


`

const Titulo = styled.div`
    width: 100%;
    position: absolute;
    top: 10%;
    display: flex;
    justify-content: center;

    .primeiro{
        color: #FFF;
        font-size: 70px;
        /* margin-left: 130px; */
        text-transform: uppercase;
        font-weight: 900;
    }
    .segundo{
        color: #e9ac2c;
        font-size: 70px;
        /* margin-left: 130px; */
        text-transform: uppercase;
        font-weight: 900;
        text-shadow: 0px 0px 55px #ffd300;  
    }

    @media screen and (max-width: 640px){
        .primeiro{
            font-size: 3rem;

        }
        .segundo{
            font-size: 3rem;
        }
    }

    @media screen and (max-width: 428px){
        top: 15%;

        .primeiro{
            font-size: 2.3rem;

        }
        .segundo{
            font-size: 2.3rem;
        }
    }
`

const StyleBanner = styled.div`
    
    position: relative;
    left: 50%;
    transform: translate(-50%, -50%);
    user-select: none;
    visibility: visible;


    .item {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 350px;
        height: 350px;
        border-radius: 50%;
        overflow: hidden;
        transition: all 300ms ease-in-out;
        z-index: -1;
        opacity: 0;
    }

    .item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }

    .active {
        border: 2px solid #e9ac2c;
        padding: 20px;
        opacity: 1;
        z-index: 99;
        box-shadow: 0px 0px 105px -35px rgb(255 188 0 / 75%);
    }

    .prev {
        border: 2px solid #e9ac2c;
        padding: 20px;
        z-index: 2;
        opacity: 0.25;
        transform: translate(-170%, -50%);
    }

    .next {
        border: 2px solid #e9ac2c;
        padding: 20px;
        z-index: 2;
        opacity: 0.25;
        transform: translate(70%, -50%);
    }

    .button-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 1400px;
        z-index: 100;
    }

    .button-container .button {
        color: #fff;
        font-size: 32px;
        cursor: pointer;
        position: relative;
        opacity: 0.75;
        transition: all 300ms ease-in-out;
    }

    .button-container .button:hover {
        opacity: 1;
    }

    .button-container .button:before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 50px;
        height: 50px;
        /* background-color: rgba(0, 0, 0, 1); */
        border-radius: 50%;
        z-index: -99;
    }

    .button-container .button:nth-child(1) {
        float: left;
    }

    .button-container .button:nth-child(2) {
        float: right;
    }

    @media screen and (max-width: 1440px){
        .prev {
        transform: translate(-120%, -50%);
        }

        .next {

        transform: translate(20%, -50%);
        }

        .button-container{
            width: 450px;

        }
    }

    @media screen and (max-width: 1240px){
        .prev {
        transform: translate(-120%, -50%);
        }

        .next {

        transform: translate(20%, -50%);
        }

        .button-container{
            width: 450px;

        }
    }

    @media screen and (max-width: 1024px){
        .prev {
        transform: translate(-120%, -50%);
        }

        .next {

        transform: translate(20%, -50%);
        }

        .button-container{
            width: 450px;

        }
    }

    @media screen and (max-width: 990px){
        .prev {
            display: none;
        }

        .next {
            display: none;
        }

    }

    @media screen and (max-width: 768px){
        .prev {
            display: none;
        }

        .next {
            display: none;
        }

    }

    @media screen and (max-width: 428px){
        .active {
            padding: 15px;
        }
        .item {
            width: 280px;
            height: 280px;
        }
        .button-container{
            width: 380px;
        }
    }

`;

const ImagensLoja = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 30px;
    height: 50%;
`;


const NossoEstoque = () => {
    const slides = document.querySelectorAll(".item");
    const button = document.querySelectorAll(".button");

    let current = 0;
    let prev = 4;
    let next = 1;

    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener("click", () => i === 0 ? gotoPrev() : gotoNext());
    }

    const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

    const gotoNext = () => current < 4 ? gotoNum(current + 1) : gotoNum(0);

    const gotoNum = number => {
        current = number;
        prev = current - 1;
        next = current + 1;

        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
            slides[i].classList.remove("prev");
            slides[i].classList.remove("next");
        }

        if (next === 5) {
            next = 0;
        }

        if (prev === -1) {
            prev = 4;
        }

        slides[current].classList.add("active");
        slides[prev].classList.add("prev");
        slides[next].classList.add("next");
    }
    
    return(
        <>
            <ContainerNossaLoja id='NossaLoja'>
                <Titulo>
                    <h1 className='primeiro'>Nosso</h1>
                    <h1 className='segundo'>Estoque</h1>
                </Titulo>

            <ImagensLoja>
                <StyleBanner class="items">
                    <div class="item active">
                        <img src="/imagens/estoque1.jpeg" alt='Imagem Nosso Estoque'/>
                    </div>
                    <div class=" item next">
                        <img src="../imagens/estoque2.jpeg" alt='Imagem Nosso Estoque'/>
                    </div>
                    <div class="item">
                        <img src="../imagens/estoque3.jpeg" alt='Imagem Nosso Estoque'/>
                    </div>
                    <div class="item">
                        <img src="../imagens/estoque4.jpeg" alt='Imagem Nosso Estoque'/>
                    </div>
                    <div class="item prev">
                        <img src="../imagens/estoque5.jpg" alt='Imagem Nosso Estoque'/>
                    </div>
                    <div class="button-container">
                        <div class="button"><i class="fas fa-angle-left"></i></div>
                        <div class="button"><i class="fas fa-angle-right"></i></div>
                    </div>
                </StyleBanner>
            
            </ImagensLoja>

            </ContainerNossaLoja>
        </>
    )
}

export default NossoEstoque