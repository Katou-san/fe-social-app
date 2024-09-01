import { envConfig } from "@/configs/env.config"

const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6IkBVc2VybTA2czZndzUwMGo4Z2Vhbzl0cjI3NiIsIk5hbWUiOiJ0ZXN0MSIsIkVtYWlsIjoidGVzdDFAZ21haWwuY29tIiwiaWF0IjoxNzI0NDI0OTI1LCJleHAiOjE3NTU5NjA5MjV9.KckXhRPiraJIp9DcD9ACAKaJBrdFhjDisf7A7unFanc'

export const headers = ({ type }: { type: 'file' | 'data' }) => {
    let tokenLocal: string = ''
    if (type === 'file') {
        return {
            responseType: "blob",
            headers: { "ngrok-skip-browser-warning": "true" },
        }
    }

    if (typeof window !== "undefined") {
        tokenLocal = localStorage.getItem('') ?? ""
    } else {
        tokenLocal = localStorage.getItem('') ?? ""
    }

    return {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token,
        'x-access-token': "",
        'ngrok-skip-browser-warning': "true"
    }

}