import Pallet from "./Pallet";
import InputForm from "./InputForm";
import {getSearchParams} from "../utilityFunctions"
import {  defer, Await ,useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import "./HomePage.css";



async function fetchDataFromColorAPI(targetUrl: string){
  const response = await fetch(targetUrl);
  if (response.status !== 200) {
    throw new Error("Error occurred with API");
  }
  const data = await response.json();
 
  console.log('data fetched')
  return data.colors
}
export function loader({ request }) {
  const params = new URL(request.url).searchParams;
  const {color,mode,count} = getSearchParams(params)
  
  const baseUrl = "https://www.thecolorapi.com/scheme";
  const searchQuery = `?hex=${color}&mode=${mode}&count=${count}&format=json`;
  
  console.log("Loader function running")
 
  return defer({colorsArray: fetchDataFromColorAPI(baseUrl + searchQuery)});
}


export default function HomePage() {
  const loaderData = useLoaderData();
  console.log(loaderData.colorsArray)
  console.log("loaderData variable accessed")
  

  function renderPallet(colorsArray){
    const colorInfo = colorsArray.map((color) => ({hex: color.hex.value, name: color.name.value}));
    console.log("In render function")
    console.log(colorInfo)
    return(
      <Pallet colorsInfo={colorInfo} />
    )
  }

  return (
    <main>
      <InputForm />
      <Suspense fallback={<h1>Loading....</h1>}>
        <Await resolve={loaderData.colorsArray}>
          {renderPallet}
        </Await>
      </Suspense>
    </main>
  );
}
