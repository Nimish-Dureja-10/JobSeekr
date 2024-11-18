import {createBrowserRouter,RouterProvider} from "react-router-dom";
import AdminJobs from "./Pages/Admin/AdminJobs";
import Applicants from "./Pages/Admin/Applicants";
import Companies from "./Pages/Admin/Companies";
import CompanySetup from "./Pages/Admin/CompanySetup";
import CreateCompany from "./Pages/Admin/CreateCompany";
import CreateJob from "./Pages/Admin/CreateJob";
import ProtectedRoutes from "./Pages/Admin/ProtectedRoutes";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import Browse from "./Pages/Browse";
import Home from "./Pages/Home";
import JobDescription from "./Pages/JobDescription";
import Jobs from "./Pages/Jobs";
import PageNotFound from "./Pages/PageNotFound";
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
    path:"/job/:id",
    element:<JobDescription/>
  },
  {
    path:"/browse",
    element:<Browse/>
  }, 
  {
    path:"/profile",
    element:<Profile/>
  },
  {
    path:"/admin/companies",
    element:<ProtectedRoutes><Companies/></ProtectedRoutes>  
  },
  {
    path:"/admin/company/create",
    element:<ProtectedRoutes><CreateCompany/></ProtectedRoutes>
  },
  {
    path:"/admin/company/:id",
    element:<ProtectedRoutes><CompanySetup/></ProtectedRoutes>
  }, 
  {
    path:"/admin/jobs",
    element:<ProtectedRoutes><AdminJobs/></ProtectedRoutes>
  },
  {
    path:"/admin/job/create",
    element:<ProtectedRoutes><CreateJob/></ProtectedRoutes>
  },
  {
    path:"/admin/job/:id/applicants",
    element:<ProtectedRoutes><Applicants/></ProtectedRoutes>
  },
  {
    path:"*",
    element:<PageNotFound />
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
