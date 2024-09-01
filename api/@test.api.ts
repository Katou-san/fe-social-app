import { headers } from "@/api/@header.api"
import { envConfig } from "@/configs/env.config"
import { http } from "@/configs/fetch.config"


export const testApi = {
    test: () => {
        return http.get({ url: `${envConfig.BE_URL}/user?current=1&limit=5&sort=Create_Day`, headers: headers({ type: "data" }) })
    }
}