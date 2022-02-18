import axios from 'axios'
var token = localStorage.getItem('token');
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
// const handleCreateUser = (full_name,address,phone_number,account)=>{
    
//     try {
//         return axios.post('http://localhost:5000/api/create-user', {full_name,address,phone_number,account},{
//             headers: {
//                 'Authorization': `Bearer ${token}` 
//               }
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }

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
    // ,handleCreateUser
    // ,handleGetUserId
}