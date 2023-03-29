import * as yup from "yup";

const techFormSchema = yup.object().shape({
    title: yup
        .string()
        .required("Campo obrigatório!"),
    status: yup
        .string()
        .required("Campo obrigatorio"),
});

export default techFormSchema;