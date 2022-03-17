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
const handleGetUserById = async (id,data)=>{
    try {
        let token = await localStorage.getItem('token')
       
        return axios.get(`https://be-doctor-care-v3.herokuapp.com/api/get-by-user-id/${id}`, data,{
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

export {
   handleDeleteUser,
   handleGetUserById,
   handleCreateDoctor,
   handleDeleteDoctor,
   handleCreateSpeciality,
   handleDeleteSpeciality,
   handleUpdateSpeciality,
   handleGetSpecialityById
}