import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MoreInfo from './Pages/MoreInfo.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CountryInfoContextProvider from './Contexts/CountryInfoContext.jsx'
import ThemeContextProvider from './Contexts/ThemeContext.jsx'

const router = createBrowserRouter([
  { path: '/FMC-Rest-countries-api', element: <App /> },
  { path: '/FMC-Rest-countries-api/MoreInfo', element: <MoreInfo /> }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContextProvider>
      <CountryInfoContextProvider>
        <RouterProvider router={router} />
      </CountryInfoContextProvider>
    </ThemeContextProvider>
  </StrictMode>,
)
