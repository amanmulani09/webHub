import axios from 'axios';

const Base_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
    url:Base_URL,
    params: {
        maxResults:'50'
    },
    headers: {
      'X-RapidAPI-Key': '9968a37f2cmshc78d2bddf6b1a13p135af1jsndb166f7734d3',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
// /baseUrl/getVides/
// this function is utlis function which helps to make any api
// request by direct calling this and passing the data;
//noise na!
  export const fetchFromAPI = async (url)=>{
    const {data} = await axios.get(`${Base_URL}/${url}`,options);
    return data;
  }



