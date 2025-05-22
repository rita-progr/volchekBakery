import {AuthSchema, ValidateErrors} from "../../types/AuthSchema.ts";

export const validateAuthForm = ({email, password, repeatPassword}:AuthSchema) => {
    const errors: ValidateErrors = { };

    if (!email?.trim()) {
        errors.email = 'Почта обязательна для заполнения';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.email = 'Введите корректный email';
    }

    if (!password?.trim()) {
        errors.password = 'Пароль обязателен для заполнения';
    } else if (password.length < 6) {
        errors.password = 'Пароль должен быть не менее 6 символов';
    }

    if(repeatPassword !== password){
        console.log(repeatPassword)
        console.log(password)
        errors.repeatPassword = 'Пароли должны совпадать'
    }


    return errors;
};