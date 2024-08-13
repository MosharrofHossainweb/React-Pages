
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import './App.css'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Home from './Pages/Home'
import Navbar from './component/Navbar'

function App() {

  const md = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element ={<About/>} />
      <Route path='/blog' element ={<Blog/>} />
    </Route>
  ))

  return (
    <>
    <RouterProvider router= {md}/>
    </>
  )
}

export default App
