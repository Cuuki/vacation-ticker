import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import {createGlobalStyle} from 'styled-components';
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
  const GlobalStyle = createGlobalStyle`
    body,
    html,
    #__next {
      width: 100%;
      height: 100%;
    }
  `;

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

        <Footer brandName={title} />
      </Box>

      <GlobalStyle />
    </>
  );
};

Layout.propTypes = layoutPropTypes;

export default Layout;
