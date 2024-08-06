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