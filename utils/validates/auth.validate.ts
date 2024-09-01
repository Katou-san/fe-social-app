import { handle_Validate } from './index';
import { auth_LoginType, auth_SignUpType } from "@/model/auth.model";

const loginValidate = (value: auth_LoginType) => {
    let Result: any = {}
    let State: boolean = true
    const { isEmail, limitString } = handle_Validate
    if (!isEmail(value.Email).status) {
        Result['email'] = isEmail(value.Email).message
        State = false
    }

    if (!limitString({ value: String(value.Pass).trim(), title: 'Password' }).status) {
        Result['pass'] = limitString({ value: String(value.Pass).trim() }).message
        State = false
    }


    return { State, Result }
}

const signUpValidate = (value: auth_SignUpType) => {
    let Result: any = {}
    let State: boolean = true
    const { isEmail, isEqual, limitString } = handle_Validate
    if (!isEmail(value.Email).status) {
        Result['email'] = isEmail(value.Email).message
        State = false
    }

    if (!limitString({ value: String(value.User_Name).trim() }).status) {
        Result['name'] = limitString({ value: String(value.User_Name).trim() }).message
        State = false
    }

    if (!limitString({ value: String(value.Pass).trim() }).status) {
        Result['pass'] = limitString({ value: String(value.Pass).trim() }).message
        State = false
    }

    if (!limitString({ value: String(value.Confrim_Pass).trim() }).status) {
        Result['confrim_pass'] = limitString({ value: String(value.Confrim_Pass).trim() }).message
        State = false
    }

    if (!isEqual({ first: value.Pass, second: value.Confrim_Pass }).status) {
        Result['confrim_pass'] = isEqual({ first: value.Pass, second: value.Confrim_Pass }).message
        State = false
    }

    return { State, Result }
}

export const authValidator = {
    loginValidate,
    signUpValidate
}

