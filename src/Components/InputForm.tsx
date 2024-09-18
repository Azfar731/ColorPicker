import { Form, useSearchParams } from "react-router-dom";
import { getSearchParams } from "../utils/utilityFunctions.tsx";
import Select from "react-select";
import "./InputForm.css";



export default function InputForm() {
  const [searchParams] = useSearchParams();
  const { color, mode, count } = getSearchParams(searchParams);
  
  const options  = [
    { value: "monochrome", label: "Monochrome" },
    { value: "monochrome-dark", label: "Monochrome Dark" },
    { value: "monochrome-light", label: "Monochrome Light" },
    { value: "analogic", label: "Analogic" },
    { value: "complement", label: "Complement" },
    { value: "analogic-complement", label: "Analogic Complement" },
    { value: "triad", label: "Triad" },
    { value: "quad", label: "Quad" },
  ];

  const selectedOption = options.find(element => element.value === mode)

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const selectStyle = {
    control: (prev: any)=>{
      return {
        ...prev,
        width: "200px",
      }
    },
    option: (prev: any,state: any)=>{
      return {
        ...prev,
        color: state.isSelected ? "black" : "slategray",
        backgroundColor: state.isSelected ? "lightgray" : "white" 
      }
    }
  }
  /* eslint-enable @typescript-eslint/no-explicit-any */
  return (
    <div className="form-container">
      <Form replace className="form">
        <input
          type="color"
          name="color"
          id="color"
          defaultValue={`#${color}`}
          aria-label="color"
        />
        <div className="inputContainer">
          <label htmlFor="mode">Mode</label>
          <Select
            // className="border"
            defaultValue={selectedOption}
            options={options}
            styles={selectStyle}
            name="mode"
            id="mode"
          />
          {/* <select name="mode" id="mode" defaultValue={mode} className="border">
            <option value="monochrome">Monochrome</option>
            <option value="monochrome-dark">Monochrome Dark</option>
            <option value="monochrome-light">Monochrome Light</option>
            <option value="analogic">Analogic</option>
            <option value="complement">Complement</option>
            <option value="analogic-complement">Analogic Complement</option>
            <option value="triad">Triad</option>
            <option value="quad">Quad</option>
          </select> */}
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
