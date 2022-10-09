import { HeaderContainer, Logo } from "./Header.style";

const Header = () => {
    return (
        <HeaderContainer>
            <div>
                <Logo src="/images/myteacher.png"></Logo>
            </div>
            <p>Encontre seu professor ideal!</p>
        </HeaderContainer>
    )
}

export default Header;

/*
Os componentes deve ser envolvidos em um elemento pai para não dar erro no jsx
*/