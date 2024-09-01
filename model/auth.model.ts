const login = {
    Email: '',
    Pass: ''
}

const signUp = {
    Email: '',
    User_Name: '',
    Pass: '',
    Confrim_Pass: ''
}


export const authModel = {
    init_Login: login,
    init_SignUp: signUp
}

export type auth_LoginType = typeof login
export type auth_SignUpType = typeof signUp