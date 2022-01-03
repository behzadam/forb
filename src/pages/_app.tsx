import { AppProps } from 'next/app';

import '../styles/global.css';

const ForbApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default ForbApp;
