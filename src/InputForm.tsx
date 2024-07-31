import { Form } from "react-router-dom";
import "./InputForm.css";

export default function InputForm() {
  return (
    <div className="form-container">
      <Form>
        <input type="color" name="color" id="color" value="#42bff5"/>
        <select name="mode" id="mode" value="monochrome">
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
        <input type="number" name="count" id="count" max={10} min={1} value={5}/>
        <button>Get color scheme</button>
      </Form>
    </div>
  );
}


       