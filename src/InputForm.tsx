import { Form } from "react-router-dom";
import "./InputForm.css";

export default function InputForm() {
  return (
    <div className="form-container">
      <form>
        <input type="color" name="color" id="color" />
        <select name="mode" id="mode">
            <option value="monochrome">Monochrome</option>
            <option value="monochrome-dark">Monochrome Dark</option>
            <option value="monochrome-light">Monochrome Light</option>
            <option value="analogic">Analogic</option>
            <option value="complement">Complement</option>
            <option value="analogic-complement">Analogic Complement</option>
            <option value="triad">Triad</option>
            <option value="quad">Quad</option>
        </select>
        <button>Get color scheme</button>
      </form>
    </div>
  );
}


       