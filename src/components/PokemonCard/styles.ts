import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  height: 450px;
  width: 400px;
  justify-content: space-evenly;
  background: rgba(90, 90, 90, 0.6);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  text-align: center;
`;

export const Title = styled.h1`
  text-transform: capitalize;
  font-weight: bold;
  font-size: 40px;
`;

export const Poster = styled.img`
  align-self: center;
  height: 230px;
  width: 230px;
`;
export const PokemonDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 16px;
`;
export const Weight = styled.h2`
  font-size: 16px;
`;
export const Height = styled.h2`
  font-size: 16px;
`;
export const Type = styled.h2`
  font-size: 16px;
`;
