import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2'
});

export async function getPokemon(search: string): Promise<Pokemon> {
  const result = await api.get(`/pokemon/${search}`);
  return result.data;
}
