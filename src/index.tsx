import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createClient, Provider } from 'urql';

const client = createClient({
  
  // url: 'https://countries.trevorblades.com/',
  url: 'https://api.github.com/graphql',
  fetchOptions: {
    headers:{
      'Authorization': 'Bearer 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'
    }
  } 
});

ReactDOM.render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
