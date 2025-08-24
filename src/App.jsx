import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Movies } from './pages/Movies'

const App = () => {
  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <Home />,

  //   },

  //   {
  //     path: '/about',
  //     element: <About />,

  //   },

  //   {
  //     path: '/movies',
  //     element: <Movies />,

  //   },

  //   {
  //     path: '/contact',
  //     element: <Contact />,

  //   },

  // ])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/contact' element={<Contact />} />

      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App