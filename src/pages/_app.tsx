import React, { ReactType } from 'react';

import DarkModeProvider from 'components/DarkMode/DarkModeProvider';

import '../styles/base.css';

interface AppProps {
  Component: ReactType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageProps: any;
}

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <DarkModeProvider>
    <Component {...pageProps} />
  </DarkModeProvider>
);

export default MyApp;
