import { headers as Header } from "@/api/@header.api"
import { respone_Type } from "@/model/respone.model"

type Props = {
    url: string
    headers?: any
    body?: any
}

export const http = {
    get: async ({ url = '', headers = Header({ type: 'data' }) }: Props) => {
        return await fetch(url, { method: 'GET', headers })
            .then(response => response.json())
            .then(json => json as respone_Type)
    },
    post: async ({ url = '', headers = Header({ type: 'data' }), body }: Props) => {
        return await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers
        })
            .then(response => response.json())
            .then(json => json as respone_Type)
    },
    put: async ({ url = '', headers = Header({ type: 'data' }), body = {} }: Props) => {
        return await fetch(url, { method: 'PUT', body: JSON.stringify(body), headers })
            .then(response => response.json())
            .then(json => json as respone_Type)
    },
    delete: async ({ url = '', headers = {} }: Props) => {
        return await fetch(url, { method: 'DELETE', headers })
            .then(response => response.json())
            .then(json => json as respone_Type)
    },


}