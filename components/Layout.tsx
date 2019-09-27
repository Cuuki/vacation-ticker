import React from 'react';
import Head from 'next/head';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  title: string;
  children: any;
}

const Layout: React.FC<LayoutProps> = props => (
  <>
    <Head>
      <title>{props.title}</title>
    </Head>

    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="100%"
      component="main"
      role="main">
      <Header />

      <section className="SiteContent">
        <Container maxWidth="md">{props.children}</Container>
      </section>

      <Footer />
    </Box>
  </>
);

export default Layout;
