import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AuthProvider from './hooks/provider/AuthProvider';
import ProductProvider from './hooks/provider/ProductProvider';
import ShoppingCartProvider from './hooks/provider/ShoppingCartProvider';
import ModalProvider from './hooks/provider/ModalProvider/index.tsx';
import UserAddressProvider from './hooks/provider/UserAddressProvider.tsx';
//import { GOOGLE_OAUTH_CLIENT_ID } from './constants/constants.ts';
const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
import ScrollToTop from './components/shared/ScrollToTop.tsx';
import Router from './Router.tsx';

export default function App() {
  return (
  /*  <GoogleOAuthProvider clientId={GOOGLE_OAUTH_CLIENT_ID}>*/
    <GoogleOAuthProvider clientId={googleClientId}>
      <BrowserRouter>
        <AuthProvider>
          <UserAddressProvider>
            <ProductProvider>
              <ShoppingCartProvider>
                <ModalProvider>
                  <ScrollToTop />
                  <Router />
                </ModalProvider>
              </ShoppingCartProvider>
            </ProductProvider>
          </UserAddressProvider>
        </AuthProvider>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}
