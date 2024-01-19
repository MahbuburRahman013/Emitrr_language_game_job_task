import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './routers/MainRouter';
import AuthProvider from './auth/AuthProvider';
import { ChakraProvider } from '@chakra-ui/react'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast';


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <ChakraProvider>
        <RouterProvider router={router} />
        <Toaster/>
      </ChakraProvider>
    </AuthProvider>
  </QueryClientProvider>

)
