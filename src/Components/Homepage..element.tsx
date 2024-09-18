import Pallet from "./Pallet";
import InputForm from "./InputForm";
import { Color, LoaderData } from "../utils/customTypes";
import { Await, useLoaderData, useNavigation } from "react-router-dom";

import { Suspense } from "react";
import { Mosaic } from "react-loading-indicators";
import PlaceHolder from "./Placeholder";
import "./HomePage.css";

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
          <Mosaic color={["#b956a9", "#d7b54a", "#efff00"]} size="large" />
        </PlaceHolder>
      ) : (
        <Suspense
          fallback={
            <PlaceHolder>
              <Mosaic
                color={["#9d00ff", "#b956a9", "#d7b54a", "#efff00"]}
                size="large"
              />
            </PlaceHolder>
          }
        >
          <Await resolve={data.colorsInfo}>{renderPallet}</Await>
        </Suspense>
      )}
    </main>
  );
}
