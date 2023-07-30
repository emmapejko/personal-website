import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ChakraProvider
} from '@chakra-ui/react'

import App from './components/App.jsx';

const root = createRoot(document.getElementById('app'));
root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);