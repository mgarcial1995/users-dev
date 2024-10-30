import { useEffect, useState } from 'react';
import { fetchUsers, getPokemons } from '../services/userServices';
import { User } from '../../../types/createUserType';

const useUsers = () => {
  const [pokemons, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [listPokemons, setListPokemons] = useState([]);
  const [find, setFind] = useState("");

  const findPokemon = () => {
    const filterPoke = pokemons.filter((e: User) => e.name.includes(find))
    console.log(filterPoke)
    setListPokemons(filterPoke)
  }

  useEffect(() => {
    const getpokemons = async () => {
      try {
        const data = await getPokemons();
        const pokemons = data.results
        setListPokemons(pokemons)
        setUsers(data.results);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };
    getpokemons();
  }, []);

  return { pokemons, loading, listPokemons, find, setFind, findPokemon };
};

export default useUsers;