import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
    config: {
      initialColorMode: 'dark',
      useSystemColorMode: true,
    },
  })

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ChakraProvider theme={customTheme}>
            <App />
        </ChakraProvider>
    </StrictMode>,
)
