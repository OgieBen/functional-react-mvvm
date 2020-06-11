import axios from "axios";

export class API {
    static fetch(url: string, data?: any,  option?: any): Promise<any> {
        return axios({
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            },
            url,
            data
        });
    }

    static post(url: string, data?: any,  option?: any): Promise<any> {
        return axios({
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            url,
            data
        });
    }
}