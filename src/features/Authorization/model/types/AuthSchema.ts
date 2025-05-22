export interface AuthSchema {
    firstName?: string;
    email?: string;
    password?: string;
    repeatPassword?: string;
    isLoading?: boolean;
    error?: string | null;
    validateErrors?: ValidateErrors;
    bakeryId?: string;

}

export interface ValidateErrors{
    email?: string;
    password?: string;
    repeatPassword?: string;
}