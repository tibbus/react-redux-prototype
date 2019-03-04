import axios from 'axios';


export const fetchCharListApi = () => {
  return axios.get('https://rickandmortyapi.com/api/character');
}