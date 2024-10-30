// import useUsers from "../features/users/hooks/useUsers";
import { User } from "../types/createUserType";
import usePokemons from "../features/users/hooks/usePokemons";
import { useState } from "react";

const UsersPage = () => {
    const {  loading,listPokemons, find, setFind, findPokemon } = usePokemons();

    if (loading) return <p>Cargando usuarios...</p>
    return (
      <div>
        Lista de pokemones
        <div>
          <input type="text" value={find} onChange={(e)=>{
            setFind(e.target.value)}
            
          }></input>
          <div onClick={()=>{findPokemon()}}>boton</div>
        </div>
        {
            listPokemons.map((poke: User) => {
                return (<div key={poke.name}>
                  <div>
                    Name: {poke.name}
                  </div>
                  <div>
                    Url: {poke.url}
                  </div>
                  </div>)
            })
        }
      </div>
    );
  };
  
export default UsersPage;