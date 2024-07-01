import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App.jsx';
import { Auth, Profile } from './components/User';
import { Home } from './components/Home';
import { Contact } from './components/Contact';

let redirect_uri = window.location.origin + '/profile';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='contact' element={<Contact />} />
      <Route path='auth' element={<Auth />} />
      <Route path='profile' element={<Profile />}/>
      {/* element={<ProtectedRoute element={Profile} isAuthenticated={isAuthenticated} />} */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-2wk3k6j0xzikgpfk.us.auth0.com"
      clientId="HSdPk3b2UkhMvTEjGSTf37336nFXd0Ob"
      authorizationParams={{
        redirect_uri: redirect_uri
      }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>,
)
