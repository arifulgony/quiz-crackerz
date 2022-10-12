import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "./components/Blog/Blog";
import Home from "./components/Home/Home";
import Main from "./components/Layout/Main";
import Statistcs from "./components/Statistcs/Statistcs";
import ErroPage from "./components/ErroPage/ErroPage";
import Qus from "./components/qus/Qus";
import Body from "./components/Body/Body";



function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      errorElement:<ErroPage></ErroPage>,
      children:[
        {
          path:'/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element :<Body></Body>
          
        },
        {
          path:'home',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Home></Home>
        },
        {
          path:'statistcs',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Statistcs></Statistcs>
        },
        {
          path:'home/qus/:qusid',
          element: <Qus />
        },
        {
          path:'qus/:qusid',
          element: <Qus />
        },
        {
          path:'blog',
          element:<Blog></Blog>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    
    </div>
  );
}

export default App;
