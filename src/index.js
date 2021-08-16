import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Auth0Provider} from '@auth0/auth0-react';


ReactDOM.render(
  <React.StrictMode>

    <Auth0Provider domain='ramondurangarcia.us.auth0.com' clientId='G4mO6dFzEo8k537NRDciWrGtmpQ5yCkO' redirectUri={window.location.origin}>

    <App />
    
    </Auth0Provider>

  </React.StrictMode>,
  document.getElementById('root')
);


