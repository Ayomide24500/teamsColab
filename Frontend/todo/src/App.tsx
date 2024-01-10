import React from 'react'
import { Route, RouterProvider } from 'react-router-dom'
import  { mainApp }  from './Router/mainRouter'

const App = () => {
  return (
    <div>
      <RouterProvider router={mainApp}/>
    </div>
  )
}

export default App
