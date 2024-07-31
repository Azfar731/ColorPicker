import InputForm from "./InputForm";
import Pallet from "./Pallet";
import { Outlet } from "react-router-dom";
import "./HomePage.css";

export async function loader({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const color = searchParams.get("color")?.slice(1) || "42bff5";
  const mode = searchParams.get("mode") || "monochrome";
  const count = searchParams.get("count") || 5;

  const baseUrl = "https://www.thecolorapi.com/scheme";
  const searchQuery = `?hex=${color}&mode=${mode}&count=${count}&format=json`;

  const response = await fetch(baseUrl + searchQuery);
  // console.log(response);
  if (!response.ok) {
    throw new Error("Error occurred with API");
  }
  const data = await response.json();
  return data.colors;
}


export default function HomePage() {
  return (
    <main>
      <Outlet />
      <Pallet />
    </main>
  );
}

// export { loader, action };
