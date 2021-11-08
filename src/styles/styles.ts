import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .error {
    margin-top: 5rem;
    text-transform: capitalize;
    font-weight: bold;
    font-size: 2rem;
    color: #fff;
  }
`;
export const Welcome = styled.h1`
  margin-top: 40px;
  font-size: 5rem;
  font-weight: 400;
  color: #fff;
`;

export const Subtitle = styled.span`
  margin-top: 2rem;
  font-size: 1.5rem;
  font-weight: 400;
  color: #fff;
`;
export const CardDiv = styled.div`
  width: 100%;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
