import * as yup from "yup";

const registerSchema = yup.object().shape({
    name: yup
        .string()
        .required("O nome é obrigatório!")
        .min(3, "O nome precisa ter pelo 3 caracteres.")
        .max(200, "O nome pode ter no máximo 200 caracteres."),
    email: yup
        .string()
        .required("O email é obrigatório")
        .email("É necessário fornecer um email."),
    password: yup
        .string()
        .required("A senha obrigatória")
        .matches(/(?=.*?[A-Z])/, "É necessário uma letra maiúscula.")
        .matches(/(?=.*?[a-z])/, "É necessário uma letra minúscula.")
        .matches(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
        .matches(/(?=.*?[#?!@$%^&*-])/, "É necessário pelo menos um caractere especial")
        .min(8, "É necessário uma senha de pelos 8 caracteres"),
    passwordConfirm: yup
        .string()
        .required("Este campo é obrigatorio")
        .oneOf([yup.ref("password")], "As senhas não coincidem")
    ,
    bio: yup
        .string()
        .required("Este campo é obrigatorio"),
    contact: yup
        .string()
        .required("Este campo é obrigatorio"),
    course_module: yup
        .string()
        .required("Este campo é obrigatorio"),
});


export default registerSchema;