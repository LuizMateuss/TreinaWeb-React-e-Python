import { CabecalhoContainer, Logo } from "./Cabecalho.style";

const Cabecalho = () => {
    return (
        <CabecalhoContainer>
            <div>
                <Logo src="/images/myteacher.png"></Logo>
            </div>

            <p>Encontre seu professor ideal!</p>
        </CabecalhoContainer>
    )
}

export default Cabecalho;