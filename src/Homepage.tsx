import Pallet from "./Pallet";
import InputForm from "./InputForm";
import {
  getSearchParams,
  getFormData,
  fetchDataFromColorAPI,
} from "./utilityFunctions";
import {
  defer,
  Await,
  useLoaderData,
  redirect,
  LoaderFunctionArgs,
  ActionFunctionArgs,
} from "react-router-dom";
import { Suspense } from "react";
import "./HomePage.css";

type Color = {
  hex: string;
  name: string;
};

type LoaderData = {
  colorsInfo: Promise<Color[]>;
};

export function loader({ request }: LoaderFunctionArgs) {
  const params = new URL(request.url).searchParams;
  const { color, mode, count } = getSearchParams(params);

  const baseUrl = "https://www.thecolorapi.com/scheme";
  const searchQuery = `?hex=${color}&mode=${mode}&count=${count}&format=json`;

  return defer({ colorsInfo: fetchDataFromColorAPI(baseUrl + searchQuery) });
}

export async function action({ request }: ActionFunctionArgs) {
  const { color, mode, count } = getFormData(await request.formData());
  throw redirect(`/?color=${color}&mode=${mode}&count=${count}`);
}

export default function HomePage() {
  const { colorsInfo } = useLoaderData() as LoaderData;

  function renderPallet(colorsInfo: Color[]) {
    return <Pallet colorsInfo={colorsInfo} />;
  }

  return (
    <main>
      <InputForm />
      <Suspense fallback={<h1>Loading....</h1>}>
        <Await resolve={colorsInfo}>{renderPallet}</Await>
      </Suspense>
    </main>
  );
}
