import { ContainerNossaLoja, ImagensLoja, StyleBanner, Titulo } from "./styled";


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

        let gotoNum = number => {
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
                <StyleBanner className="items">
                    <div className="item active">
                        <img src="/imagens/estoque1.jpeg" alt='Imagem Nosso Estoque'/>
                    </div>
                    <div className=" item next">
                        <img src="../imagens/estoque2.jpeg" alt='Imagem Nosso Estoque'/>
                    </div>
                    <div className="item">
                        <img src="../imagens/estoque3.jpeg" alt='Imagem Nosso Estoque'/>
                    </div>
                    <div className="item">
                        <img src="../imagens/estoque4.jpeg" alt='Imagem Nosso Estoque'/>
                    </div>
                    <div className="item prev">
                        <img src="../imagens/estoque5.jpg" alt='Imagem Nosso Estoque'/>
                    </div>
                    <div className="button-container">
                        <div className="button"><i className="fas fa-angle-left"></i></div>
                        <div className="button"><i className="fas fa-angle-right"></i></div>
                    </div>
                </StyleBanner>
            
            </ImagensLoja>

            </ContainerNossaLoja>
        </>
    )
}

export default NossoEstoque