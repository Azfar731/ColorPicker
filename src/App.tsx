import HomePage, { loader as HomePageLoader } from "./Components/Homepage";
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
        errorElement={<ErrorElement links={[]} className="error-outer-div"/>}
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
