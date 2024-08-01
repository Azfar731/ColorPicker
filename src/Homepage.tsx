import InputForm from "./InputForm";
import Pallet from "./Pallet";
import { Outlet } from "react-router-dom";
import "./HomePage.css";

export async function loader({ request }) {
  
  const params = new URL(request.url).searchParams;
  const color = params.get("color")?.slice(1) || "42bff5";
  const mode = params.get("mode") || "monochrome";
  const count = params.get("count") || "5";

  const baseUrl = "https://www.thecolorapi.com/scheme";
  const searchQuery = `?hex=${color}&mode=${mode}&count=${count}&format=json`;
  
  const response = await fetch(baseUrl + searchQuery);
  if (response.status !== 200) {
    throw new Error("Error occurred with API");
  }
  const data = await response.json();
  data?.colors ? console.log(data.colors) : console.log("Resposne is 200 but colors array not available");
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
