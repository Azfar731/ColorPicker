import { Color, ColorInput } from "./customTypes";

export function getSearchParams(searchParams: URLSearchParams) {
  const unFormattedColorInput = searchParams.get("color") || "#42bff5";
  const mode = searchParams.get("mode") || "monochrome";
  const count = searchParams.get("count") || "5";
  const color = unFormattedColorInput.slice(1)
  return { color, mode, count };
  // return { color: unFormattedColorInput, mode, count };

}

export function getFormData(formData: FormData) {
  // Retrieve form values
  const colorEntry = formData.get("color");
  const modeEntry = formData.get("mode");
  const countEntry = formData.get("count");

  // Check if any of the form values are null
  if (colorEntry === null || modeEntry === null || countEntry === null) {
    throw new Error("One or more required form fields are missing.");
  }

  // Safely process the values now that we know they're not null
  const color = colorEntry.slice(1);
  const mode = modeEntry;
  const count = countEntry;

  return { color, mode, count };
}

export async function fetchDataFromColorAPI(targetUrl: string) {
  const response = await fetch(targetUrl);
  
  
  if (!response.ok) {
    throw {
      msg: "Failed to Fetch Response",
      status: response.status,
      manual: true
    }
  }
  
 
  
  const data = await response.json();
  console.log("API DAta: ", data)
  
  if (data.code === 400) {
    throw {
      msg: "API RETURNED AN ERROR ",
      status: data.code,
      manual: true
    }
  }

  return getColorsInfo(data.colors);
}

function getColorsInfo<T extends ColorInput>(colorsArray: T[]) {
  const colorInfo: Color[] = colorsArray.map((color) => {
    return { hex: color.hex.value, name: color.name.value };
  });
  return colorInfo;
}
