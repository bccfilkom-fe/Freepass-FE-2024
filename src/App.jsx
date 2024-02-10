import Hero from './pages/Hero'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AnonimChat from './pages/anonimChat'


// react router dom
const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="overflow-hidden"><Hero></Hero></div>,
  },
  {
    path: "/chat",
    element:<AnonimChat></AnonimChat>
  }
]);

export default function App() {
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
