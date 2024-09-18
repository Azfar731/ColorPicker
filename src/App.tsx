import HomePage  from "./Components/Homepage..element";
import { loader as HomePageLoader } from "./Components/Homepage.loader";
import Navbar from "./Components/Navbar";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import ErrorElement from "./ErrorPage/ErrorElement";

function App() {
  const browserRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<HomePage />}
        loader={HomePageLoader}
        errorElement={<ErrorElement  width="100%" height="90vh" backgroundColor="whitesmoke"/>}
      />
    )
  );

  return (
    <>
      <Navbar />
      <RouterProvider router={browserRouter} />
    </>
  );
}

export default App;
