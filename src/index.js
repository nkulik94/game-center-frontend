import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import './index.css';
import { UserProvider } from './context/user';
import { GamesProvider } from './context/games';
import App from './components/App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import reportWebVitals from './reportWebVitals';

let theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      paper: '#424242',
      default: '#424242'
    }
  },
})
theme = responsiveFontSizes(theme);

ReactDOM.render(
    <ThemeProvider theme={theme} >
      <BrowserRouter>
        <UserProvider>
          <GamesProvider>
            <App />
          </GamesProvider>
        </UserProvider>
      </BrowserRouter>
    </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
