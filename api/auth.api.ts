import { headers } from "@/api/@header.api"
import { envConfig } from "@/configs/env.config"
import { http } from "@/configs/fetch.config"
import { auth_LoginType, auth_SignUpType } from "@/model/auth.model"


export const authApi = {
    login: (body: auth_LoginType) => {
        return http.post({ url: `${envConfig.BE_URL}/auth/login`, body })
    },
    signUp: (body: auth_SignUpType) => {
        return http.post({ url: `${envConfig.BE_URL}/auth/register`, body })
    },
}