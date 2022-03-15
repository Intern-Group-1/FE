import axios from 'axios'
const handleDeleteUser = async (id)=>{
    try {
        var token = await localStorage.getItem('token')
        console.log('token là chi đó ');
        console.log(token);
        console.log('id là chi đó ');
        console.log(id);
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




export {
   handleDeleteUser,
   handleGetUserById,
   handleCreateDoctor
}