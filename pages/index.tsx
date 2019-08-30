import React from 'react';
import Button from '@material-ui/core/Button';
import styled, {css} from 'styled-components';

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: color(#5cb289 tint(50%));
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
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
        <StyledButton primary>Primary Button</StyledButton>
      </Container>
    </div>
  );
};

export default Index;
