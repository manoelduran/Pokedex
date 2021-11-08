/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-shadow */
import  Head  from 'next/head';
import React, { useEffect, useState } from 'react';
import { Loading } from '../components/Loading';
import { PokemonCard } from '../components/PokemonCard';
import { SearchBox } from '../components/SearchBox';
import * as api from '../services/api';
import { Container, CardDiv } from '../styles/styles';

export default function Home() {
  const [pokemon, setPokemon] = useState<Pokemon>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');
  const fetchPokemon = async (search: string) => {
    const pokemon = await api.getPokemon(search);
    setPokemon(pokemon);
  };

  useEffect(() => {
if(search){
  try {
    setIsLoading(true)
    fetchPokemon(search);
  } catch (err) {
    console.log(err);
  } finally {
    setIsLoading(false);
  }
}
  }, [search]);
  return (
    <Container>
      <Head>
        <title> Pokedex</title>
        <meta
          name="description"
          content="Know more about Pokemon!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Know more about Pokemon!"
        />
      </Head>
      <SearchBox value={search} onChange={(search) => setSearch(search)} />
      {isLoading ? (
        <Loading />
      ) : (
        pokemon && (
          <CardDiv>
          <PokemonCard key={pokemon.id} name={pokemon.name} image={pokemon.sprites.front_default} height={pokemon.height} type={pokemon.types[0].type.name} weight={pokemon.weight} />
          </CardDiv>
        )
      )}
    </Container>
  );
}
