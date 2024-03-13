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
    data: codeResponseData
}

interface codeArrayType {
    error: boolean;
    message: string;
    data: ApiResponseData[];
}

interface codeResponseData {
    code?: {
        html: string;
        css: string;
        javascript: string;
        python: string;
    }
    createdAt: string;
    language: string;
    title: string;
    updatedAt: string;
    userId: string;
    userName: string;
    __v: number;
    _id: string;
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
