import axios from 'axios'
import Session from 'react-session-api'

const handleLoginAPI = (email, password)=>{
    try {
        return axios.post('https://be-doctor-care-v3.herokuapp.com/api/login', {email, password})
    } catch (error) {
        console.log(error)
    }
}
const handleSignUpAPI = (email, password,password_1,role)=>{
    try {
        
        return axios.post('https://be-doctor-care-v3.herokuapp.com/api/register', {email, password, password_1,role})
    } catch (error) {
        console.log(error)
    }
}
// const handleCreateUser = (full_name, address, phone_number,gender,avatar,age)=>{
//     try {
//         return axios.post('https://be-doctor-care-v3.herokuapp.com/api/create-user', {full_name, address, phone_number,gender,avatar,age})
//     } catch (error) {
//         console.log(error)
//     }
// }
const handleCreateUser = async (data)=>{
    try {
         var token = await localStorage.getItem('token')
        return await axios.post('https://be-doctor-care-v3.herokuapp.com/api/create-user/', data,{
            headers: {
                'Authorization': `Bearer ${token}` 
              }
        })      
    } catch (error) {
        console.log(error)
    }
}
const handleGetUserId = async ()=>{
    try {
        var token1 = localStorage.getItem('token')
        // var token1='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjFkOWQxODM1MzY1YTNhODEwNDMyYzEiLCJpYXQiOjE2NDYxMDc5Mjh9.3izG2wtLLyx53UMT4LDEhMQJV3qxkFDqDdHNoA41rrY'
        console.log('token la'+ token1);
        return await axios.get('https://be-doctor-care-v3.herokuapp.com/api/profile-user',{
            headers: {
                'Authorization': `Bearer ${token1}` 
              }
        })
    } catch (error) {
        console.log(error)
    }
}

export {
    handleLoginAPI
    ,handleSignUpAPI
    ,handleCreateUser
     ,handleGetUserId
}