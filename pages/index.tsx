import React from 'react';
import Button from '@material-ui/core/Button';
import Layout from '../components/Layout';

const Index = () => {
  return (
    <Layout title="Vacation Ticker">
      <h1>
        <span>Vacation ticker</span>
      </h1>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </Layout>
  );
};

export default Index;
