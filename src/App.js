import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from './components/Homepage';
import About from './components/About';
import ErrorComponent from './components/errorComponent';
const Router = createBrowserRouter([
  {
    path:"/",
    element: <Homepage/>,
    errorElement:<ErrorComponent/>
  },
  {
    path:"/about",
    element:<About/>
  }
])



function App() {
  return (
    <>
  <RouterProvider router={Router} />
    </>
  );
}

export default App;
