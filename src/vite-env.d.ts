/// <reference types="vite/client" />

interface userInfoType {
    error: boolean;
    message: string,
    data: {
        username: string;
        picture: string;
        email: string;
        savedCodes: Array<string>;
    }
}

interface loginCredentialsType {
    email: string;
    password: string;
}

interface signupCredentialsType {
    username: string;
    email: string;
    password: string;
}
