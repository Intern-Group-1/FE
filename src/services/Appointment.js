import axios from 'axios'
const handleCreateAppointment = async (data)=>{
    try {
        return axios.post('http://localhost:5000/api/create-appointment/', data)
        .then(res => console.log(res))
        .catch(err => console.log(err))         
    } catch (error) {
        console.log(error)
    }
}
const handleGetAppointment = async (id)=>{
    try {
        console.log('Id usser')
        console.log(id)
        return axios.get(`https://be-doctor-care-v3.herokuapp.com/api/get-all-appointment/${id}`)       
    } catch (error) {
        console.log(error)
    }
}

export {
    handleCreateAppointment,handleGetAppointment
}