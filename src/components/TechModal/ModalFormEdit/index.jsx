import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import techFormSchema from "../techFormSchema"
import Input from "../../Inputs"
import { StyledButton } from "../../../styles/Buttons"
import { StyledForm, StyledWraper } from "../../../styles/Forms"
import React, { useContext, useState } from "react"
import { StyledButtonsWrapper } from "./styles"
import { TechContext } from "../../../providers/TechContext"

const ModalFormEdit = () => {
    const [teste, setTeste] = useState(false);
    const { selectedTech, setSelectedTech, deleteTech, editTech, techLoading, techLoadingDelete } = useContext(TechContext);

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: "onBlur",
        resolver: yupResolver(techFormSchema),
        defaultValues: {
            title: selectedTech.title,
            status: selectedTech.status,
        }
    });

    const submit = async (data) => {
        delete data.title;
        await editTech(selectedTech.id, data);

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
                    disabled={true}
                    className="disableField"
                />
                {errors.title?.message && <span>{errors.title.message}</span>}
            </StyledWraper>

            <fieldset className="filedsetSelect">
                <label className="labelSelect" htmlFor="status" >Selecionar Status</label>
                <select id="status" disabled={teste} {...register("status")}>
                    <option value="">Selecionar Status</option>
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                </select>
                {errors.status?.message && <span>{errors.status.message}</span>}
            </fieldset>
            <StyledButtonsWrapper>
                <div>
                    <StyledButton
                        type="submit"
                        buttonStyle="disable"
                        buttonSize="default"
                        disabled={techLoading} >
                        {techLoading ? "Salvando..." : "Salvar Alterações"}
                    </StyledButton>
                </div>
                <div>
                    <StyledButton
                        type="button"
                        buttonStyle="grayLight"
                        buttonSize="default"
                        disabled={techLoading} onClick={() => deleteTech(selectedTech.id)} >
                        {techLoadingDelete ? "Excluindo" : "Excluir"}
                    </StyledButton>
                </div>
            </StyledButtonsWrapper>
        </StyledForm>
    )
}

export default ModalFormEdit;
