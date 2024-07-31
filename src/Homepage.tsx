import InputForm from "./InputForm";
import {Outlet} from "react-router-dom"
import "./HomePage.css"

export default function HomePage() {
  return (
    <main>
      <InputForm />
      <Outlet />
    </main>
  );
}
