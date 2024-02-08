import logo from './logo.svg';
import './App.css';
import MainPage from './Components/MainPage/MainPage';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
function App() {

  let routers = createBrowserRouter([
    {path: "", element: <MainPage/>,children: [
      {index: true , element: <Home/>},
      {path:"about",element: <About/>},
      {path:"portfolio",element: <Portfolio/>},
      {path:"contact",element: <Contact/>},
      // {path:"*",element: <Error/>}, 
    ]}
  ])
  return <>
    <RouterProvider router={routers}></RouterProvider>

  </>
}

export default App;
