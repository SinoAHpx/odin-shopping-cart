import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  }
])

const customTheme = extendTheme({
    config: {
      initialColorMode: 'dark',
      useSystemColorMode: true,
    },
  })

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ChakraProvider theme={customTheme}>
            <RouterProvider router={router}/>
        </ChakraProvider>
    </StrictMode>,
)
