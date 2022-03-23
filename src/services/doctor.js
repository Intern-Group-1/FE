import axios from 'axios'
const handleGetAppointmentByDoctor = async (id)=>{
    console.log(id);
    try {
        let token = await localStorage.getItem('token')
        console.log(token);
        return await axios.get(`https://be-doctor-care-v3.herokuapp.com/api/get-appointment-by-doctor/${id}`,{
            headers: {
                'Authorization': `Bearer ${token}` 
              }
        })
    } catch (error) {
        console.log(error)
    }
}
export {
    handleGetAppointmentByDoctor
}