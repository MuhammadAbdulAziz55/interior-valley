
import {
  createBrowserRouter,
  
} from "react-router-dom";

import PrimaryLayout from "../../layout/PrimaryLayout";
import HomePage from "../../pages/home/HomePage";

import SecondaryLayout from "../../layout/SecondaryLayout";
import LoginPage from "../../pages/user_authentication/LoginPage";
import RegisterPage from "../../pages/user_authentication/RegisterPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <PrimaryLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
      
       
      ],
     
    },
    {
      
        element: <SecondaryLayout />,
        children: [
          {
            path: "/login",
            element: <LoginPage />,
          },
          {
            path: "/register",
            element: <RegisterPage />
          }
         
        ],
    }
  ]);


export default router;