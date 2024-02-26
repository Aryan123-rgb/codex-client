/// <reference types="vite/client" />

interface userInfoType {
    error: boolean;
    message: string,
    data: {
        userId?: string;
        username: string;
        picture: string;
        email: string;
        savedCodes: Array<string>;
    }
}

interface codeInfoType {
    error: boolean;
    message: string,
    data: {
        replId?: string;
        title?: string;
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
