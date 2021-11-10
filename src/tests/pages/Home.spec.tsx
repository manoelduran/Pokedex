import { mocked } from 'ts-jest/utils';
import { getPokemon } from '../../services/api';

const pokemon = {
  id: 30,
  height: 30,
  name: 'Pikachu',
  weight: 30,
  sprites: {
    front_default: ''
  },
  types: [
    {
      type: {
        name: 'water'
      }
    }
  ]
};

jest.mock('../../services/api');

describe('Home page', () => {
  it('render pokemon', async () => {
    const getPokemonMocked = mocked(getPokemon);
    getPokemonMocked.mockResolvedValueOnce({
      height: pokemon.height,
      weight: pokemon.weight,
      id: pokemon.id,
      name: pokemon.name,
      sprites: {
        front_default: pokemon.sprites.front_default
      },
      types: [
        {
          type: {
            name: pokemon.types[0].type.name
          }
        }
      ]
    });
    const response = await getPokemon(toString());
    expect(response).toEqual(
      expect.objectContaining({
        id: 30,
        height: 30,
        name: 'Pikachu',
        weight: 30,
        sprites: {
          front_default: ''
        },
        types: [
          {
            type: {
              name: 'water'
            }
          }
        ]
      })
    );
  });
});
