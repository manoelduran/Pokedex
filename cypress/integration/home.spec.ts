import promisify from 'cypress-promise';

const myPokemon = 'pikachu';
describe('Get Pokemon Test', () => {
  it('Search a pokemon name', async () => {
    cy.visit('http://localhost:3000');
    cy.get('input').should('be.visible').type(myPokemon);
    await promisify(
      cy
        .request({
          method: 'GET',
          url: `https://pokeapi.co/api/v2/pokemon/${myPokemon}`,
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          cy.contains(response.body.types[0].type.name);
        })
    );
    cy.pause();
  });
});
