import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import Input from "../../Inputs"
import { StyledButton } from "../../../styles/Buttons"
import { StyledForm, StyledWraper } from "../../../styles/Forms"
import React, { useContext, useState } from "react"
import techFormSchema from "../techFormSchema"
import { TechContext } from "../../../providers/TechContext"

const ModalFormCreate = () => {
    const { createTech, techLoading } = useContext(TechContext);


    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: "onBlur",
        resolver: yupResolver(techFormSchema)
    });

    const submit = async (data) => {
        await createTech(data);
        reset();
    }


    return (
        <StyledForm noValidate onSubmit={handleSubmit(submit)}>
            <StyledWraper>
                <Input
                    type="text"
                    label="Nome"
                    id="title"
                    placeholder="Digite a tecnologia"
                    register={register("title")}
                    disabled={techLoading}
                />
                {errors.title?.message && <span>{errors.title.message}</span>}
            </StyledWraper>

            <fieldset className="filedsetSelect">
                <label className="labelSelect" htmlFor="status" >Selecionar Status</label>
                <select id="status" disabled={techLoading} {...register("status")}>
                    <option value="">Selecionar Status</option>
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                </select>
                {errors.status?.message && <span>{errors.status.message}</span>}
            </fieldset>
            <StyledButton
                type="submit"
                buttonStyle="primary"
                buttonSize="default"
                disabled={techLoading} >
                {techLoading ? "Cadastrando..." : "Cadastrar Tecnologia"}
            </StyledButton>
        </StyledForm>
    )
}

export default ModalFormCreate;
