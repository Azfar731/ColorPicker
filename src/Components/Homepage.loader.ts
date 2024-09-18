import { defer, LoaderFunctionArgs } from "react-router-dom";
import { getSearchParams, fetchDataFromColorAPI } from "../utils/utilityFunctions";

export function loader({ request }: LoaderFunctionArgs) {
  const params = new URL(request.url).searchParams;
  const { color, mode, count } = getSearchParams(params); //utility function to get search parameters
  const baseUrl = "https://www.thecolorapi.com/scheme";
  const searchQuery = `?hex=${color}&mode=${mode}&count=${count}&format=json`;

  return defer({ colorsInfo: fetchDataFromColorAPI(baseUrl + searchQuery) });
}
