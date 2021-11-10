import { render } from '@testing-library/react';
import { PokemonCard } from '.';

describe('PokemonCard component', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <PokemonCard
        height={30}
        image="/pokeball.svg"
        name="Squirtle"
        type="fire"
        weight={30}
      />
    );
    expect(getByText('Squirtle')).toBeInTheDocument();
  });
});
