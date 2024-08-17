import Pallet from "./Pallet";
import InputForm from "./InputForm";
import {
  getSearchParams,
  fetchDataFromColorAPI,
} from "../utils/utilityFunctions";
import { Color, LoaderData } from "../utils/customTypes";
import {
  defer,
  Await,
  useLoaderData,
  LoaderFunctionArgs,
} from "react-router-dom";

import { Suspense } from "react";
import "./HomePage.css";

export function loader({ request }: LoaderFunctionArgs) {
  console.log("in loader");
  const params = new URL(request.url).searchParams;
  const { color, mode, count } = getSearchParams(params); //utility function to get search parameters
  const baseUrl = "https://www.thecolorapi.com/scheme";
  const searchQuery = `?hex=${color}&mode=${mode}&count=${count}&format=json`;

  return defer({ colorsInfo: fetchDataFromColorAPI(baseUrl + searchQuery) });
}

export default function HomePage() {
  console.log("In component");

  const data = useLoaderData() as LoaderData;
  function renderPallet(colorsInfo: Color[]) {
    console.log("promise resolved, Values recieved: ", colorsInfo);
    return <Pallet colorsInfo={colorsInfo} />;
  }

  return (
    <main>
      <InputForm />
      <Suspense fallback={<h1>Loading....</h1>}>
        <Await resolve={data.colorsInfo}>{renderPallet}</Await>
      </Suspense>
    </main>
  );
}
