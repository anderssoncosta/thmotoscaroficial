import { ContainerSobreNos, Sobre, SobreImg } from "./styled"


const SobreNos = () => {
    return(
    
    <ContainerSobreNos>
            <Sobre id='SobreNos'>
                <div className="texto_sobre">
                    <h1 className='titulo_sobrenos'>Quem é</h1>
                    <h1 className='subtitulo_sobrenos'>thmotoscar?</h1>
                    <p className="texto_sobrenos">
                        A TH Motos Car é uma empresa localizado em fortaleza, especializada na compra, venda e troca de motos de todas as cilindradas, trabalhamos com 0km, seminovas e usadas e também começamos com carros seminovos e novos. trabalhamos sempre focados na satisfação de nossos clientes com qualidade e procedência. Venha nos visitar e confira nosso amplo estoque de motos e carros!
                    </p>
                </div>

                <SobreImg>
                    <img className='img_sobrenos' src="/imagens/imagemsobrenos.png" alt="Imagem Sobre Nos" />
                </SobreImg>
            </Sobre>

        </ContainerSobreNos>

    )
}

export default SobreNos