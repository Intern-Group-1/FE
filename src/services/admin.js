import axios from 'axios'
const handleDeleteUser = async (id)=>{
    try {
        var token = await localStorage.getItem('token')
       
        return await axios.delete(`https://be-doctor-care-v3.herokuapp.com/api/delete-user/${id}`,{
            headers: {
                'Authorization': `Bearer ${token}` 
              }
        })  

        
    } catch (error) {
        console.log(error)
    }
}
const handleGetUserById = async (id)=>{
    try {
        let token = await localStorage.getItem('token')
        console.log(token);
        return await axios.get(`https://be-doctor-care-v3.herokuapp.com/api/get-by-id/${id}`,{
            headers: {
                'Authorization': `Bearer ${token}` 
              }
        })
    } catch (error) {
        console.log(error)
    }
}
const handleCreateDoctor = async (data)=>{
    try {
         var token = await localStorage.getItem('token')
         
        return await axios.post('https://be-doctor-care-v3.herokuapp.com/api/create-doctor/', data,{
            headers: {
                'Authorization': `Bearer ${token}` 
              }
        })      
    } catch (error) {
        console.log(error)
    }
}
const handleDeleteDoctor = async (id)=>{
    try {
        var token = await localStorage.getItem('token')
        
        return await axios.delete(`https://be-doctor-care-v3.herokuapp.com/api/delete-doctor/${id}`,{
            headers: {
                'Authorization': `Bearer ${token}` 
              }
        })  

        
    } catch (error) {
        console.log(error)
    }
}
const handleCreateSpeciality = async (data)=>{
    try {
        console.log(data);
         var token = await localStorage.getItem('token')
         
        return await axios.post('https://be-doctor-care-v3.herokuapp.com/api/create-speciality/', data,{
            headers: {
                'Authorization': `Bearer ${token}` 
              }
        })      
    } catch (error) {
        console.log(error)
    }
}
const handleDeleteSpeciality = async (id)=>{
    try {
        var token = await localStorage.getItem('token')
       
        return await axios.delete(`https://be-doctor-care-v3.herokuapp.com/api/delete-speciality/${id}`,{
            headers: {
                'Authorization': `Bearer ${token}` 
              }
        })  

        
    } catch (error) {
        console.log(error)
    }
}
const handleUpdateSpeciality = async (id,data)=>{
    try {
        var token = await localStorage.getItem('token')
      
        return await axios.put(`https://be-doctor-care-v3.herokuapp.com/api/update-speciality/${id}`,data,{
            headers: {
                'Authorization': `Bearer ${token}` 
              }
        })  

        
    } catch (error) {
        console.log(error)
    }
}
const handleGetSpecialityById = async (id)=>{
    try {
        var token = await localStorage.getItem('token')
        
        return await axios.get(`https://be-doctor-care-v3.herokuapp.com/api/get-by-speciality/${id}`,{
            headers: {
                'Authorization': `Bearer ${token}` 
              }
        })  

        
    } catch (error) {
        console.log(error)
    }
}
const handleUpdateDoctor = async (id,data)=>{
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
const handleGetDoctorById = async (id)=>{
    try {
        
        return await axios.get(`https://be-doctor-care-v3.herokuapp.com/api/profile-doctor/${id}`)
    } catch (error) {
        console.log(error)
    }
}

const handleCreateBranch = async (data)=>{
    try {
         var token = await localStorage.getItem('token')
         
        return await axios.post('https://be-doctor-care-v3.herokuapp.com/api/create-branch/', data,{
            headers: {
                'Authorization': `Bearer ${token}` 
              }
        })      
    } catch (error) {
        console.log(error)
    }
}

const handleUpdateBranch = async (id,data)=>{
    try {
        var token = await localStorage.getItem('token')
      
        return await axios.put(`https://be-doctor-care-v3.herokuapp.com/api/update-branch/${id}`,data,{
            headers: {
                'Authorization': `Bearer ${token}` 
              }
        })  

        
    } catch (error) {
        console.log(error)
    }
}
const handleBranchByID = async (id)=>{
    try {
        var token = await localStorage.getItem('token')
      
        return await axios.get(`https://be-doctor-care-v3.herokuapp.com/api/get-id-branch/${id}`,{
            headers: {
                'Authorization': `Bearer ${token}` 
              }
        })  

        
    } catch (error) {
        console.log(error)
    }
}
const handleDeleteBranch = async (id)=>{
    try {
        var token = await localStorage.getItem('token')
       
        return await axios.delete(`https://be-doctor-care-v3.herokuapp.com/api/delete-branch/${id}`,{
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
const handleGetAppointmentbyIDDoctor = async (id)=>{
    try {
        
        
        return await axios.get(`https://be-doctor-care-v3.herokuapp.com/api/get-appointment-by-doctor/${id}`)       
    } catch (error) {
        console.log(error)
    }
}
export {
    //user
   handleDeleteUser,
   handleGetUserById,
    //doctor
   handleCreateDoctor,
   handleDeleteDoctor,
   handleUpdateDoctor,
   handleGetDoctorById,
    //speciality
   handleCreateSpeciality,
   handleDeleteSpeciality,
   handleUpdateSpeciality,
   handleGetSpecialityById,
    //branch
   handleCreateBranch,
   handleUpdateBranch,
   handleBranchByID,
   handleDeleteBranch,
    //appointment
    handleGetAppointment,
    handleDeleteStatus,
    handleUpateStatus,
    handleGetAppointmentbyIDDoctor

}