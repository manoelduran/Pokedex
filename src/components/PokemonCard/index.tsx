import {
  Container,
  Poster,
  Title,
  Weight,
  Height,
  Type,
  PokemonDetails
} from './styles';

interface PokemonCardProps {
  name: string;
  image: string;
  weight: number;
  type: string;
  height: number;
}

export function PokemonCard({
  name,
  image,
  height,
  type,
  weight
}: PokemonCardProps) {
  return (
    <Container>
      <Title>{name}</Title>
      <Poster src={image} />
      <PokemonDetails>
        <Weight>{weight}</Weight>
        <Height>{height}</Height>
        <Type>{type}</Type>
      </PokemonDetails>
    </Container>
  );
}
