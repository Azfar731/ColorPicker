import HomePage, { loader as HomePageLoader } from "./Homepage";
import InputForm, { action as InputFormAction } from "./InputForm";
import Pallet from "./Pallet";
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
      <Route path="/" element={<HomePage />} loader={HomePageLoader}>
        <Route index element={<InputForm />} action={InputFormAction} />
      </Route>
    )
  );

  return <RouterProvider router={browserRouter} />;
}

export default App;
