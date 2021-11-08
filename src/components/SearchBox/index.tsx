import { useState } from 'react';
import { Container, Input } from './styles';

interface SearchBoxProps {
  value: string;
  onChange: (event: string) => void;
}

export function SearchBox({ value, onChange }: SearchBoxProps) {
  const [PokemonDisplay, setPokemonDisplay] = useState(value);
  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setPokemonDisplay(event.target.value.toLowerCase());
    setTimeout(() => {
      setTimeout(() => onChange(event.target.value), 2000);
    }, 2000);
  }
  return (
    <Container>
      <Input
        value={PokemonDisplay}
        placeholder="Escolha seu filme"
        type="text"
        onChange={handleSearch}
      />
    </Container>
  );
}
