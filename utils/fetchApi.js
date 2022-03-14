import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

/* headers: {
    'x-rapidapi-host': 'bayut.p.rapidapi.com',
    'x-rapidapi-key': 'e9c1ccc3fbmsh73de4d1572ba8dbp136ec6jsncd877a96f9e5'
  } */

export const fetchApi =  async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'e9c1ccc3fbmsh73de4d1572ba8dbp136ec6jsncd877a96f9e5'
        } 
    })

    return data;
}