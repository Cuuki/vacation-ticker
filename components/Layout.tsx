import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  title: string;
  children: any;
}

const layoutPropTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const Layout: React.FC<LayoutProps> = props => {
  const {title, children} = props;

  return (
    <>
      <Head>
        <title>{title}</title>
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
          <Container maxWidth="md">{children}</Container>
        </section>

        <Footer />
      </Box>
    </>
  );
};

Layout.propTypes = layoutPropTypes;

export default Layout;
