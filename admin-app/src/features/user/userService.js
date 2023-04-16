import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_BASE_URL}users/`;


// Get All Users action
const getAllUsers = async (token) => {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
    }
    
    const response = await axios.get(API_URL, config)

    return response.data;
}



const userService = {
    getAllUsers,
}

export default userService
