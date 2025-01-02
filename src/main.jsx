import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hero from './components/Hero/Hero.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import About from './components/About/About.jsx'
import OurServices from './components/OurServices/ourServices.jsx'
import Contact from './components/Contact/Contact.jsx'
import Toplist from './components/Toplist/Toplist.jsx'

const router = createBrowserRouter([
  {
    path: '/',
  element: <App/>,
  children: [
    {
      path: '',
      element: <Hero/>
    },
    {
      path: 'about',
      element: <About/>
    },
    {
      path: 'menu',
      element: <Toplist/>
    },
    {
      path: 'contact',
      element: <Contact/>
    },
    {
      path: 'ourServices',
      element: <OurServices/>
    }

  ]
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)