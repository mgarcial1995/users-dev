import axios from 'axios';
import { User } from '../../../types/createUserType';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

export const fetchUsers = async (): Promise<User[]> => {
  const response = await api.post('/users');
  console.log(response,"----------response")
  return response.data;
};

export const createUser = async (task: User) => {
  const response = await api.post('/user/create', task);
  return response.data;
};

export const getPokemons = async () => {
  const response = await api.get('pokemon/');
  return response.data;
};