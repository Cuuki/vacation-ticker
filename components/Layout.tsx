import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Header from '@components/Header';
import Main from '@components/Main';
import Footer from '@components/Footer';
import GlobalStyle from '@styles/global';

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

      <Header brandName={title} />

      <Main>{children}</Main>

      <Footer brandName={title} />

      <GlobalStyle />
    </>
  );
};

Layout.propTypes = layoutPropTypes;

export default Layout;
