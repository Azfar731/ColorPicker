import { Form, useSearchParams } from "react-router-dom";
import { getSearchParams } from "../utils/utilityFunctions.tsx";
import "./InputForm.css";

export default function InputForm() {
  const [searchParams] = useSearchParams();
  const { color, mode, count } = getSearchParams(searchParams);

  return (
    <div className="form-container">
      <Form replace method="post" className="form">
        <input
          type="color"
          name="color"
          id="color"
          defaultValue={`#${color}`}
          aria-label="color"
        />
        <div className="inputContainer">
          <label htmlFor="mode">Mode</label>
          <select name="mode" id="mode" defaultValue={mode} className="border">
            <option value="monochrome">Monochrome</option>
            <option value="monochrome-dark">Monochrome Dark</option>
            <option value="monochrome-light">Monochrome Light</option>
            <option value="analogic">Analogic</option>
            <option value="complement">Complement</option>
            <option value="analogic-complement">Analogic Complement</option>
            <option value="triad">Triad</option>
            <option value="quad">Quad</option>
          </select>
        </div>
        <div className="inputContainer">
          <label htmlFor="count">Count</label>
          <input
            type="number"
            name="count"
            id="count"
            max={50}
            min={1}
            defaultValue={count}
            className="border"
            required
          />
        </div>
        <button className="btn border">Get scheme</button>
      </Form>
    </div>
  );
}
