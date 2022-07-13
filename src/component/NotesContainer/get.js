import axios from 'axios';

export default function getNotes(){
    return axios.get('https://nutanix-farewell.herokuapp.com/api/getNotes')
    .then(res => res.data.data)
    .catch(error => {
        console.error(error);
    });
}