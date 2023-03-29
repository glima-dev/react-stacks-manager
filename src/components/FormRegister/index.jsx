import React, { useContext } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import registerSchema from "./registerSchema";
import Input from "../Inputs";
import { StyledButton } from "../../styles/Buttons";
import { StyledForm, StyledWraper } from "../../styles/Forms";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../providers/UserContext";

const FormRegister = () => {
    const { loadingRegister, registerUser } = useContext(UserContext);

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: "onBlur",
        resolver: yupResolver(registerSchema)
    });

    const submit = async (data) => {
        await registerUser(data);
        reset();
    }

    return (
        <StyledForm noValidate onSubmit={handleSubmit(submit)}>
            <StyledWraper>
                <Input
                    type="text"
                    label="Nome"
                    id="name"
                    placeholder="Digite o seu nome"
                    register={register("name")}
                />
                {errors.name?.message && <span>{errors.name.message}</span>}
            </StyledWraper>
            <StyledWraper>
                <Input
                    type="email"
                    label="Email"
                    id="email"
                    placeholder="Digite aqui seu email"
                    register={register("email")}
                    disabled={loadingRegister}
                />
                {errors.email?.message && <span aria-errormessage="error">{errors.email.message}</span>}
            </StyledWraper>
            <StyledWraper>
                <Input
                    type="password"
                    label="Senha"
                    id="password"
                    placeholder="Digite aqui sua senha"
                    register={register("password")} disabled={loadingRegister}
                />
                {errors.password?.message && <span aria-errormessage="error">{errors.password.message}</span>}
            </StyledWraper>
            <StyledWraper>
                <Input
                    type="password"
                    label="Confirmar Senha"
                    id="passwordConfirm"
                    placeholder="Confirme sua senha"
                    register={register("passwordConfirm")}
                    disabled={loadingRegister}
                />
                {errors.passwordConfirm?.message && <span aria-errormessage="error">{errors.passwordConfirm.message}</span>}
            </StyledWraper>
            <StyledWraper>
                <Input
                    type="text"
                    label="Bio"
                    id="bio"
                    placeholder="Fale sobre você"
                    register={register("bio")}
                    disabled={loadingRegister}
                />
                {errors.bio?.message && <span>{errors.bio.message}</span>}
            </StyledWraper>
            <StyledWraper>
                <Input
                    type="text"
                    label="Contato"
                    id="contact"
                    placeholder="Opção de contato"
                    register={register("contact")}
                    disabled={loadingRegister}
                />
                {errors.contact?.message && <span>{errors.contact.message}</span>}
            </StyledWraper>
            <fieldset className="filedsetSelect">
                <label className="labelSelect" htmlFor="course_module">Selecionar módulo</label>
                <select id="course_module" disabled={loadingRegister} {...register("course_module")}>
                    <option value="">Selecionar módulo</option>
                    <option value="Primeiro Módulo">Primeiro Módulo</option>
                    <option value="Segundo Módulo">Segundo Módulo</option>
                    <option value="Terceiro Módulo">Terceiro Módulo</option>
                    <option value="Quarto Módulo">Quarto Módulo</option>
                    <option value="Quinto Módulo">Quinto Módulo</option>
                    <option value="Sexto Módulo">Sexto Módulo</option>
                </select>
                {errors.course_module?.message && <span>{errors.course_module.message}</span>}
            </fieldset>
            <StyledButton
                type="submit"
                buttonStyle="disable"
                buttonSize="default"
                disabled={loadingRegister}
            >
                {loadingRegister ? "Cadastrando..." : "Cadastrar"}
            </StyledButton>
        </StyledForm>
    )
}

export default FormRegister;