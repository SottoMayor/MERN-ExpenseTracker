import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CreateGlobalTheme from './styles/CreateGlobalTheme';
import { ThemeProvider } from 'styled-components'
import theme from './styles/Theme'

ReactDOM.render(
  <React.StrictMode>

    <ThemeProvider theme={theme}>
      <CreateGlobalTheme/>
      <App />
    </ThemeProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
