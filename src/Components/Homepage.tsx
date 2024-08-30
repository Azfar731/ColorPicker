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
  useNavigation,
} from "react-router-dom";

import { Suspense } from "react";
import { Mosaic } from "react-loading-indicators";
import PlaceHolder from "./Placeholder";
import "./HomePage.css";

export function loader({ request }: LoaderFunctionArgs) {
  const params = new URL(request.url).searchParams;
  const { color, mode, count } = getSearchParams(params); //utility function to get search parameters
  const baseUrl = "https://www.thecolorapi.com/scheme";
  const searchQuery = `?hex=${color}&mode=${mode}&count=${count}&format=json`;

  return defer({ colorsInfo: fetchDataFromColorAPI(baseUrl + searchQuery) });
}

export default function HomePage() {
  const data = useLoaderData() as LoaderData;
  const navigation = useNavigation();

  const isReloading =
    navigation.state === "loading" &&
    navigation.formData != null &&
    navigation.formAction ===
      navigation.location.pathname + navigation.location.search;

  const isRedirecting =
    navigation.state === "loading" &&
    navigation.formData != null &&
    navigation.formAction !==
      navigation.location.pathname + navigation.location.search;

  function renderPallet(colorsInfo: Color[]) {
    return <Pallet colorsInfo={colorsInfo} />;
  }

  return (
    <main>
      <InputForm />
      {isReloading || isRedirecting ? (
        <PlaceHolder>
          <Mosaic
            color={["#b956a9", "#d7b54a", "#efff00"]}
            size="large"
          />
        </PlaceHolder>
      ) : (
        <Suspense
          fallback={
            <Mosaic
              color={["#9d00ff", "#b956a9", "#d7b54a", "#efff00"]}
              size="large"
            />
          }
        >
          <Await resolve={data.colorsInfo}>{renderPallet}</Await>
        </Suspense>
      )}
    </main>
  );
}
