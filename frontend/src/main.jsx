import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import Notfound404 from './pages/Notfound404.jsx'
import SmNavebar from './componant/SmNavebar.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Aibot from './componant/Aibot.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/about',
    element:<About/>
  },
  {
    path:'/service',
    element:<Services/>
  },
  {
    path:'/product'
  },
  {
    path:'/contact',
    element:<Contact/>
  },
  {
    path:'*',
    element:<Notfound404/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SmNavebar/>
    <Aibot/>
    
    <RouterProvider router={router}/>
    
    
  </StrictMode>,
)
