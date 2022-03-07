import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeScript } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,
})

ReactDOM.render(
  <ChakraProvider>
    <ColorModeScript initialColorMode={theme.initialColorMode} />
    <App/>
  </ChakraProvider>
  , document.querySelector('#root'));