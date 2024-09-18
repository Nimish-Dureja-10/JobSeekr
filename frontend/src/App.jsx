import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import Browse from "./Pages/Browse";
import Home from "./Pages/Home";
import Jobs from "./Pages/Jobs";
import Profile from "./Pages/Profile";

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },
  {
    path:"/jobs",
    element:<Jobs/>
  },
  {
    path:"/browse",
    element:<Browse/>
  }, 
  {
    path:"/profile",
    element:<Profile/>
  }
]);

function App() {

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App
