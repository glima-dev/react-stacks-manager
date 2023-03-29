import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "./loginSchema";
import Input from "../Inputs";
import { StyledButton } from "../../styles/Buttons";
import { StyledForm, StyledWraper } from "../../styles/Forms";

const FormLogin = ({ userLogin, loadingLogin }) => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur",
        resolver: yupResolver(loginSchema)
    });

    const submit = (data) => {
        userLogin(data);
    }

    return (
        <StyledForm noValidate onSubmit={handleSubmit(submit)}>
            <StyledWraper>
                <Input
                    id="email"
                    label="Email"
                    type="text"
                    placeholder="Digite aqui seu email"
                    register={register("email")}
                    disabled={loadingLogin} />
                {errors.email?.message && <span>{errors.email.message}</span>}
            </StyledWraper>
            <StyledWraper>
                <Input
                    id="password"
                    label="Senha"
                    type="password"
                    placeholder="Digite aqui sua senha"
                    register={register("password")}
                    disabled={loadingLogin} />
                {errors.password?.message && <span>{errors.password.message}</span>}
            </StyledWraper>
            <StyledButton
                type="submit"
                buttonStyle="primary"
                buttonSize="default"
                disabled={loadingLogin} >
                {loadingLogin ? "Entrando..." : "Entrar"}
            </StyledButton>
        </StyledForm>
    )
}

export default FormLogin;


