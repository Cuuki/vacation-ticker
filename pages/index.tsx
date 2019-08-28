import React from 'react';
import Button from '@material-ui/core/Button';

const Index = () => {
  return (
    <div>
      <h1>
        <span>Vacation ticker</span>
      </h1>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <style jsx>{`
        div {
          & h1 {
            color: color(#5cb289 tint(50%));
          }
        }
        h1 {
          & span {
            text-transform: uppercase;
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
