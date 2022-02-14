import axios from "axios";
import * as Config from '../constant/Config'
import React from 'react'

 function   ApiCaller(endpoint, method) {
  return axios({
        method:method,
        url:`${Config.API_URL}/${endpoint}`,
         
      })
     
      .catch(err => {
        console.log(err);
      }
      );
      
};

export default ApiCaller;

