import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Layout from "./Layout";


const App = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
          
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "*",
                element: <h1>Not Found</h1>,
            }
        ],
    },
]);

export default App;
