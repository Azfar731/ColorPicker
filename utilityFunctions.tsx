type Color = {
    hex: string;
    name: string;
}
export function getSearchParams(searchParams: URLSearchParams){
    const color = searchParams.get("color") || "42bff5";
    const mode = searchParams.get("mode") || "monochrome";
    const count = searchParams.get("count") || "5";

    return {color,mode,count}
}

export function getFormData(formData){
    const color = formData.get("color").slice(1);
    const mode = formData.get("mode");
    const count = formData.get("count");

    return{color, mode, count}
}


export async function fetchDataFromColorAPI(targetUrl: string) {
    const response = await fetch(targetUrl);
    if (response.status !== 200) {
      throw new Error("Error occurred with API");
    }
    const data = await response.json();
    return getColorsInfo(data.colors);
}

function getColorsInfo(colorsArray) {
    const colorInfo: Color[] = colorsArray.map(
      (color) => ({ hex: color.hex.value, name: color.name.value })
    );
    return colorInfo;
}
  