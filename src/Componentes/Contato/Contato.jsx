import { CaixaContato, ContainerContato, ContatoForm, Mapa } from "./styled"

const Contato = () => {
    return(
    <ContainerContato id="Contato">
        <CaixaContato>
                <ContatoForm>
                        <h1 className="first">Onde</h1>
                        <h1 className="second">Estamos?</h1>
                        <p>
                        R. Um, 853  Loja: 01 - 1 Fortaleza - CE 60767-725
                        </p>
                        
                </ContatoForm>

                    <Mapa>
                        <iframe
                            
                            title="Mapa"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15923.943807041376!2d-38.5780498!3d-3.8131142!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfd956f24ef564d9b!2sTH%20Motos%20Car!5e0!3m2!1spt-BR!2sbr!4v1673097569692!5m2!1spt-BR!2sbr"
                            width={window.innerWidth}
                            height="350"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </Mapa>
        </CaixaContato>

    </ContainerContato>
    )
}

export default Contato