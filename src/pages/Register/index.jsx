import { StyledBackGround } from "../../styles/StyledBackGround";
import { StyledMainRegister } from "./styles";
import logo from "../../assets/Logo.svg";
import FormRegister from "../../components/FormRegister";
import { Link } from "react-router-dom";

const RegisterPage = () => {
    return (
        <StyledBackGround>
            <StyledMainRegister>
                <header>
                    <img src={logo} alt="logo" />
                    <Link to="/">
                        Voltar
                    </Link>
                </header>
                <section >
                    <h2>Crie sua conta</h2>
                    <p>Rapido e grátis, vamos nessa</p>
                    <FormRegister />
                </section>
            </StyledMainRegister>
        </StyledBackGround>
    )
}

export default RegisterPage;

