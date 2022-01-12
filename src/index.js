import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import customTheme from './theme/extendTheme'

ReactDOM.render(
  <BrowserRouter>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
