import axios from 'axios';

export default function postNotes(values){
    return axios.post("https://nutanix-farewell.herokuapp.com/api/saveNote", values)
    .catch(error => {
        console.error(error);
    });
}