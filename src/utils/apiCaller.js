import axios from "axios";
import * as Config from '../constant/Config'
import React from 'react'

async function   ApiCaller(endpoint, method='GET',body) {
  return axios({
        method:method,
        url:`${Config.API_URL}/${endpoint}`,
        data: body
      })
      .catch(err => {
        console.log(err);
      });
  
};
export default ApiCaller;

