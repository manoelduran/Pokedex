import { useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import { Container, Input } from './styles';

interface SearchBoxProps {
  value: string;
  onChange: (event: string) => void;
}

export function SearchBox({ value, onChange }: SearchBoxProps) {
  const [PokemonDisplay, setPokemonDisplay] = useState(value);
  const debounceChange = useDebounce(onChange, 2000);
  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    debounceChange(event.target.value);
    setPokemonDisplay(event.target.value.toLowerCase());
  }
  return (
    <Container data-aos="flip-left">
      <Input
        value={PokemonDisplay}
        placeholder="Escolha seu pokemon"
        type="text"
        onChange={handleSearch}
      />
    </Container>
  );
}
