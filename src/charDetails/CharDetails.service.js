import axios from 'axios';


export const fetchCharDetailsApi = (id) => {
  return axios.get(`https://rickandmortyapi.com/api/character/${id}`);
}