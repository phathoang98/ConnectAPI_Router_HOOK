import axios from 'axios'
import * as Config from './config'

// ----- HÀM axios để call API

export default function callApi(endPoint, method, body) {
    return (
        axios({
            method: method,
            url: `${Config.API_URL}/${endPoint}`,
            data: body
        })
            .catch((err) => {
                console.log(err);
            })
    )
}