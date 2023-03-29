import { StyledBackGround } from "../../styles/StyledBackGround";
import { StyledMainLogin } from "./styles";
import logo from "../../assets/Logo.svg";
import FormLogin from "../../components/FormLogin";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

const LoginPage = () => {

    const { userLogin, loadingLogin } = useContext(UserContext);

    return (
        <StyledBackGround>
            <StyledMainLogin>
                <img src={logo} alt="logo" />
                <section >
                    <h2>Login</h2>
                    <FormLogin userLogin={userLogin} loadingLogin={loadingLogin} />
                    <p>Ainda não possui uma conta?</p>
                    <Link to="/register">
                        Cadastre-se
                    </Link>
                </section>
            </StyledMainLogin>
        </StyledBackGround>
    )
}

export default LoginPage;