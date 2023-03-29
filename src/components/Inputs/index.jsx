import React from "react";
import { Styledfieldset } from "./styles";

const Input = ({ id, label, type, register, placeholder, disabled }) => {
    return (
        <Styledfieldset>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                disabled={disabled} {...register} />
        </Styledfieldset>
    )
}

export default Input;