import axios from 'axios'

const API_URL = `${process.env.REACT_APP_API_BASE_URL}`;

// Register user
const register = async (userData) => {
    const response = await axios.post(`${API_URL}auth/register`, userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Login user
const login = async (userData) => {
    const response = await axios.post(`${API_URL}auth/login`, userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Logout user
const logout = () => {
    localStorage.removeItem('user')
}

const authService = {
    register,
    logout,
    login,
}

export default authService
