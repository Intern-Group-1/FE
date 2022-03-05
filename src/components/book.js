import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

import ApiCaller from '../utils/apiCaller';
import Adoctor from './Adoctor';



function Book() {
    const { id } = useParams();
    const [Api, setApi] = useState([]);
    const [Id, setId] = useState('');
    useEffect(() => {
        ApiCaller('get-all-doctor', 'GET')
            .then(async res => {
                console.log(res);
                setApi(res.data.data)
            })

    }, []);

    return (
        <>
            {Api.map(api => (
                <>
                   
                    {(id == api._id) ? (
                        <>
                            <Adoctor
                                avt={api.avatar} speciality={api.speciality.name} full_name={api.full_name} />
                            <div>Bac si co id la {id}</div></>)

                        : <></>}

                </>
            ))}
           

        </>)
}

export default Book