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
        const  token = Session.get('token');
       return  axios.post('https://be-doctor-care-v3.herokuapp.com/api/create-user/', data,{
            headers: {
                'Authorization': `Bearer ${token}`,
              }
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))        
    } catch (error) {
        console.log(error)
    }
}

// const handleGetUserId = (id)=>{
//     console.log(token)
//     try {
//         return axios.get('http://localhost:5000/api/profile-user', {id},{
//             headers: {
//                 'Authorization': `Bearer ${token}` 
//               }
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }

export {
    handleLoginAPI
    ,handleSignUpAPI
    ,handleCreateUser
    // ,handleGetUserId
}