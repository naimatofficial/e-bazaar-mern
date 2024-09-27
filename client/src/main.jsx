import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { Toaster } from 'react-hot-toast'

import { ThemeProvider } from '@material-tailwind/react'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { Provider } from 'react-redux'
import store from './redux/store'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <ThemeProvider>
            <Toaster position="top-center" reverseOrder={false} />
            <RouterProvider router={router} />
        </ThemeProvider>
    </Provider>
)
