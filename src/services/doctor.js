import axios from 'axios'
const handleGetDoctorId = async ()=>{
    try {
        let token = await localStorage.getItem('token')
       
        return axios.get('https://be-doctor-care-v3.herokuapp.com/api/profile-doctor',{
            headers: {
                'Authorization': `Bearer ${token}` 
              }
        })
    } catch (error) {
        console.log(error)
    }
}


const handleGetAppointmentbyDoctor = async (id)=>{
    try {
        
        console.log(id)
        return await axios.get(`https://be-doctor-care-v3.herokuapp.com/api/get-appointment-by-doctor/${id}`)       
    } catch (error) {
        console.log(error)
    }
}

const handleGetProfileDoctorById = async (id)=>{
    try {
        
        return await axios.get(`https://be-doctor-care-v3.herokuapp.com/api/profile-doctor/${id}`)
    } catch (error) {
        console.log(error)
    }
}
const handleUpdateProfileDoctor = async (id,data)=>{
    try {
         var token = await localStorage.getItem('token')
        return await axios.put(`https://be-doctor-care-v3.herokuapp.com/api/update-doctor/${id}`, data,{
            headers: {
                'Authorization': `Bearer ${token}` 
              }
        })      
    } catch (error) {
        console.log(error)
    }
}

const handleUpateStatus = async(id, data)=>{
    try { 
        return await axios.put(`https://be-doctor-care-v3.herokuapp.com/api/update-appointment/${id}`, data)
    } catch (error) {
        console.log(error)
    }
}
const handleDeleteStatus = async(id)=>{
    try {
        
        return await axios.delete(`https://be-doctor-care-v3.herokuapp.com/api/delete-appointment/${id}`)
    } catch (error) {
        console.log(error)
    }
}

const handleGetAppointment = async (id)=>{
    try {
        return await axios.get(`https://be-doctor-care-v3.herokuapp.com/api/get-appointment-id/${id}`)       
    } catch (error) {
        console.log(error)
    }
}

const handleGetUserById = async (id)=>{
    try {
        let token = await localStorage.getItem('token')
        console.log(token);
        return  axios.get(`https://be-doctor-care-v3.herokuapp.com/api/get-by-id/${id}`,{
            headers: {
                'Authorization':`Bearer ${token}` 
              }
        })
    } catch (error) {
        console.log(error)
    }
}
const handleGetDoctorById = async (id)=>{
    try {
        
        return await axios.get(`https://be-doctor-care-v3.herokuapp.com/api/profile-doctor/${id}`)
    } catch (error) {
        console.log(error)
    }
}
const handleCreateSchedule = async (data)=>{
    try {
         var token = await localStorage.getItem('token')
            console.log(token);
        return await axios.post('https://be-doctor-care-v3.herokuapp.com/api/create-schedule/', data,{
            headers: {
                'Authorization': `Bearer ${token}` 
              }
        })      
    } catch (error) {
        console.log(error)
    }
}
export {
    handleGetDoctorId,
    handleGetAppointmentbyDoctor,
    handleGetProfileDoctorById,
    handleUpdateProfileDoctor,
    handleUpateStatus,
    handleDeleteStatus,
    handleGetAppointment,
    handleGetUserById,
    handleGetDoctorById,
    handleCreateSchedule
    
}