import axios from 'axios';

export const defaultHeaders = () => {
    axios.defaults.headers.common = {
        "Access-Control-Allow-Origin": "*",
        crossorigin:true
    }
}
export const getApi = async (endpoint) => {
    
    const result = await axios.get(endpoint)
    const data = await result.data
    return data;
}
