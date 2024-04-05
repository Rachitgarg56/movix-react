import axios from 'axios';

// const api_token = process.env.REACT_APP_API_TOKEN;

async function fetchApi (url) {
    const options = {
        method: 'GET',
        url: url,
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZjVhNzAxODY0YzQxNTM2MmQzZGY0Zjg1ZGFlNmYxYiIsInN1YiI6IjY2MGQwMGM4YzhhNWFjMDE2Mzc4ZmZlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WtB7kXx7YuhkarKvo131TJ8V6txDp4xunG9EOBuisxo'
        }
    }
    
    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.log(error);
    }

      
}

export default fetchApi;