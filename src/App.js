import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Flex,
} from '@chakra-ui/react';
import Font from "./Font/Font.tsx";
import router from './router/Router.js';
import { RouterProvider } from 'react-router-dom';
import "./style.css";
import HomePage from './Component/HomePage.js';

function App() {
  return (
      <ChakraProvider theme={theme}>
        <Font/>
        <RouterProvider router={router}/>
      </ChakraProvider>
  );
}

export default App;
