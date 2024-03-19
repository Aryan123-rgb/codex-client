import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { CompilerSliceStateType } from "./compilerSlice";
console.log(import.meta.env.VITE_BACKEND_BASE_URL)
export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_BASE_URL,
    credentials: "include",
  }),
  //   tagTypes: ["myCodes", "allCodes"],
  endpoints: (builder) => ({
    createNewRepl: builder.mutation<codeInfoType, any>({
      query: (body) => ({
        url: "/code/create-new-repl",
        method: "POST",
        body: body,
      }),
    }),
    saveCode: builder.mutation<any, any>({
      query: ({ fullCode, id }) => {
        return {
          url: `/code/save/${id}`,
          method: "POST",
          body: { fullCode },
        };
      },
    }),

    loadCode: builder.query<codeInfoType, string>({
      query: (id) => ({
        url: `/code/load/${id}`,
      }),
    }),
    login: builder.mutation<userInfoType, loginCredentialsType>({
      query: (body) => ({
        url: "/user/login",
        method: "POST",
        body: body,
        credentials: "include",
      }),
    }),
    signup: builder.mutation<userInfoType, signupCredentialsType>({
      query: (body) => ({
        url: "/user/signup",
        method: "POST",
        body: body,
      }),
    }),
    logout: builder.mutation<{ error: boolean; message: string }, void>({
      query: () => ({
        url: "/user/logout",
        method: "POST",
      }),
    }),
    getUserDetails: builder.query<userInfoType, void>({
      query: () => ({ url: "/user/user-details", cache: "no-store" }),
    }),
    compileCode: builder.mutation<string, any>({
      query: ({ code, currentLanguage }) => {
        return {
          url: `code/compile-${currentLanguage}-code`,
          method: "POST",
          body: { code },
        }
      },

    }),
    getAllCodes: builder.query<codeArrayType, void>({
      query: () => ({
        url: "/code/get-all-codes",
        cache: "no-store",
      }),
    }),
  }),
});

export const {
  useCreateNewReplMutation,
  useSaveCodeMutation,
  useLoadCodeQuery,
  useLoginMutation,
  useLogoutMutation,
  useGetUserDetailsQuery,
  useSignupMutation,
  useGetAllCodesQuery,
  useCompileCodeMutation
} = api;
