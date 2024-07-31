import HomePage from "./Homepage";
import Pallet from "./Pallet";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import "./App.css";

function App() {

  const browserRouter = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<HomePage />}>
      <Route index element={<Pallet />} />
    </Route>
  ))


  return( 
    <RouterProvider router={browserRouter} />   
  );
}

export default App;
