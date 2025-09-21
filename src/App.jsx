import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup, { action as signupAction } from "./pages/Signup";
import Signin, { action as signinAction } from "./pages/Signin";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import Appointments, {
  action as appointmentAction,
} from "./pages/Appointments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/dang-ky-kham",
        element: <Appointments />,
        action: appointmentAction,
      },
      {
        path: "/dang-nhap",
        element: <Signin />,
        action: signinAction,
      },
      {
        path: "/dang-ky",
        element: <Signup />,
        action: signupAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
