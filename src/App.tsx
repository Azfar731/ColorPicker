import HomePage, { loader as HomePageLoader } from "./Homepage";
import InputForm, { action as InputFormAction } from "./InputForm";
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
      <Route path="/" element={<HomePage />} loader={HomePageLoader} action={InputFormAction} />
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
