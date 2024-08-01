import { Form, redirect } from "react-router-dom";
import "./InputForm.css";


export async function action({request}) {
  console.log("In action function");
  const formData = await request.formData()
  const color = formData.get("color").slice(1)
  const mode = formData.get("mode")
  const count = formData.get("count")

  throw redirect(`/?color=${color}&mode=${mode}&count=${count}`)
}

export default function InputForm() {
  return (
    <div className="form-container">
      <Form method="post">
        <input type="color" name="color" id="color" defaultValue="#42bff5"/>
        <select name="mode" id="mode" defaultValue="monochrome">
            <option value="monochrome" >Monochrome</option>
            <option value="monochrome-dark">Monochrome Dark</option>
            <option value="monochrome-light">Monochrome Light</option>
            <option value="analogic">Analogic</option>
            <option value="complement">Complement</option>
            <option value="analogic-complement">Analogic Complement</option>
            <option value="triad">Triad</option>
            <option value="quad">Quad</option>
        </select>
        <label htmlFor="count">Count</label>
        <input type="number" name="count" id="count" max={10} min={1} defaultValue="5"/>
        <button>Get color scheme</button>
      </Form>
    </div>
  );
}


       