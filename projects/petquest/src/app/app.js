// pages/_app.js
import '../styles/globals.css';
import { ClerkWrapper } from '../clerk';

function MyApp({ Component, pageProps }) {
  return (
    <ClerkWrapper>
      <Component {...pageProps} />
    </ClerkWrapper>
  );
}

export default MyApp;
