import styled from '@emotion/styled';

const Container= styled.div`
  display: grid;
  grid-gap: 10px;
  padding: 10px;
  margin-top: 10vh;
`;

const CounterContainer = styled.div`
  display: grid;
  grid-template-columns:40% 10% 40% 10% ;
  
`;

const SumContainer = styled.div`
  display: grid;
  grid-template-columns:50% 50%;
  justify-content: center;
  align-items: center;
  
`;

const NumberInput = styled.input`
  border-radius: 6px;
  
  
`;

export default {
    NumberInput,
    Container,
    CounterContainer,
    SumContainer
};