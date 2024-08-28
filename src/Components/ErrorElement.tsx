import "./ErrorElement.css"
import PlaceHolder from "./Placeholder"
import { useRouteError } from "react-router-dom"


export default function ErrorElement(){

    const error = useRouteError()
    console.log(error)

    return(
        <PlaceHolder>
                <h1>An error occurred</h1>
        </PlaceHolder>
    )
}



