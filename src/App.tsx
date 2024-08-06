import HomePage, { loader as HomePageLoader, action as HomePageAction } from "./Homepage";
import Navbar from "./Navbar";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";

function App() {
  const browserRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<HomePage />} loader={HomePageLoader} action={HomePageAction} />
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
