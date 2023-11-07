import { Layout } from "./Layout";
import {FinancialSupport} from'./FinancialSupport/FinancialSupport'
import  GirevanceRedressal  from "./Components/GirevanceRedressal";
// import { OnlineRegistration } from "./Components/OnlineRegistration";
import EntrepreneurRegistration from './Components/dropdown/EntrepreneurRegistration';
import InvestorRegistration from './Components/dropdown/InvestorRegistration';
import StudentRegistration from './Components/dropdown/StudentRegistration';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Components/Home";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path:'/',
          element:<Home/>
        },
        // {
        //   path: "/OnlineRegistration",
        //   element: <OnlineRegistration/>,
        // },
        {
          path: "/FinancialSupport",
          element: <FinancialSupport/>,
        },
        {
          path: "/GirevanceRedressal",
          element: <GirevanceRedressal/>,
        },
        {
          path:"/EntrepreneurRegistration",
          element:<EntrepreneurRegistration/>
        },
        {
          path:"/InvestorRegistration",
          element:<InvestorRegistration/>
        },
        {
          path:"/StudentRegistration",
          element:<StudentRegistration/>
        }
      ],
    },
  ]);
  return <div className="App">
    <div>
      <RouterProvider router={router}/>

    </div>
  </div>;
}

export default App;
