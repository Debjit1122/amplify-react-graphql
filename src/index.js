import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "@aws-amplify/ui-react/styles.css";
import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';
import config from './aws-exports';
import studioTheme from './ui-components/studioTheme';
Amplify.configure(config);
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={studioTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


