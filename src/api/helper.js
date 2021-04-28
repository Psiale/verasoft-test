import axios from 'axios';

export const defaultHeaders = () => {
    axios.defaults.headers.common['X-requested-With'] = 'XMLHttpRequest';
}
export const getApi = async (endpoint) => {
    
    const result = await axios.get(endpoint)
    console.log(result)
    const data = await result.data
    return data;
}
