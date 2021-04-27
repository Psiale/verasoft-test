import axios from 'axios';

const getApi = async (endpoint) => {
    const result = await axios.get(endpoint)
    const data = await result.data
    return data;
}

export default getApi;
