import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
`;

export const Input = styled.input`
  height: 50px;
  width: 400px;
  font-size: 1.2em;
  padding: 0 24px;
  border-radius: 5px;
  color: #3a3a3a;
  border: 2px solid #fff;
  border-right: 0;
  img {
    margin-left: 5px;
    height: 20px;
    width: 20px;
    vertical-align: bottom;
  }
`;
