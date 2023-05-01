import axios from "axios";
import Cookies from 'js-cookie'
import config from "./config";


export const Signup = async(data:any) => {
    const reqData = JSON.stringify(data)
    const token = Cookies.get('jwt_token')
    try {
        const response = await axios (
            {
                method: "POST",
                url : `${config.API_DOMAIN_URL}/api/v1/auth/signup`,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                data: reqData
            }
        );
        const responseData = await response.data
        return responseData
    }
    catch (err) {
        return err
    }
}