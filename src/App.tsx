import HomePage, {
  loader as HomePageLoader,
  action as HomePageAction,
} from "./Homepage";
import InputForm from "./InputForm";
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
      <Route
        path="/"
        element={<HomePage />}
        loader={HomePageLoader}
        action={HomePageAction}
      />
    )
  );

  return <RouterProvider router={browserRouter} />;
}

export default App;
