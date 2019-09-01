import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  margin: 0.5em 0.011em;
  padding: 0.25em 1em 0;
  color: color(#5cb289 tint(50%));
  font-weight: 700;
  font-family: sans-serif, serif;
  background: transparent;
  border: 2px solid rgb(0, 0, 0);
  border-radius: 3px;
  content: url('');

  @media Screen and (max-width >= 960px) {
    background: rgb(255, 255, 0);
  }
  &:before {
    content: '';
  }
`;

const Container = styled.div`
  text-align: center;
`;

const Index = () => {
  return (
    <div>
      <h1>
        <span>Vacation ticker</span>
      </h1>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <Container>
        <StyledButton>Normal Button</StyledButton>
      </Container>
    </div>
  );
};

export default Index;
