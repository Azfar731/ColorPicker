import Pallet from "./Pallet";
import InputForm from "./InputForm";
import { getSearchParams, getFormData } from "../utilityFunctions";
import { defer, Await, useLoaderData, redirect } from "react-router-dom";
import { Suspense } from "react";
import "./HomePage.css";

type Color = {
  hex: string;
  name: string;
}

function getColorsInfo(colorsArray) {
  const colorInfo: Color[] = colorsArray.map(
    (color) => ({ hex: color.hex.value, name: color.name.value })
  );
  return colorInfo;
}

async function fetchDataFromColorAPI(targetUrl: string) {
  const response = await fetch(targetUrl);
  if (response.status !== 200) {
    throw new Error("Error occurred with API");
  }
  const data = await response.json();
  return getColorsInfo(data.colors);
}

export function loader({ request }) {
  const params = new URL(request.url).searchParams;
  const { color, mode, count } = getSearchParams(params);

  const baseUrl = "https://www.thecolorapi.com/scheme";
  const searchQuery = `?hex=${color}&mode=${mode}&count=${count}&format=json`;

  return defer({ colorsInfo: fetchDataFromColorAPI(baseUrl + searchQuery) });
}


export async function action({ request }) {
  const { color, mode, count } = getFormData(await request.formData());
  throw redirect(`/?color=${color}&mode=${mode}&count=${count}`);
}


export default function HomePage() {
  const loaderData: {colorsInfo: Color[] } = useLoaderData();
  

  function renderPallet(colorsInfo: Color[]) {
    return <Pallet colorsInfo={colorsInfo} />;
  }

  return (
    <main>
      <InputForm />
      <Suspense fallback={<h1>Loading....</h1>}>
        <Await resolve={loaderData.colorsInfo}>{renderPallet}</Await>
      </Suspense>
    </main>
  );
}
