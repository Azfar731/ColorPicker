import InputForm from "./InputForm";
import Pallet from "./Pallet";
import { Outlet, useLoaderData } from "react-router-dom";
import "./HomePage.css";

export async function loader({ request }) {
  console.log("this change is in my dev branch")
  const params = new URL(request.url).searchParams;
  const color = params.get("color") || "42bff5";
  const mode = params.get("mode") || "monochrome";
  const count = params.get("count") || "5";

  const baseUrl = "https://www.thecolorapi.com/scheme";
  const searchQuery = `?hex=${color}&mode=${mode}&count=${count}&format=json`;

  console.log("URL: " + baseUrl + searchQuery);
  
  const response = await fetch(baseUrl + searchQuery);
  if (response.status !== 200) {
    throw new Error("Error occurred with API");
  }
  const data = await response.json();
  data?.colors
    ? console.log(data.colors)
    : console.log("Resposne is 200 but colors array not available");
  return data.colors;
}

export default function HomePage() {
  const colorArray = useLoaderData();

  const colorInfo = colorArray.map((color) => ({hex: color.hex.value, name: color.name.value}));
  // console.log(colorHexValues)

  return (
    <main>
      <Outlet />
      <Pallet colorsInfo={colorInfo} />
    </main>
  );
}

// export { loader, action };
