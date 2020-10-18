import axios from 'axios'

const url = "http://localhost:3001";

export const registerRestaurant = async (input) => {
    const apiEndpoint = url + '/restaurants' 
    const response = axios.post(apiEndpoint, input)
    return response
}