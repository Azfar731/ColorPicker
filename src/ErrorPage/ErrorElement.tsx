import "./ErrorElement.css";
import {
  json,
  useRouteError,
  Link,
  isRouteErrorResponse,
} from "react-router-dom";

export default function ErrorElement({ links, ...rest }) {
  const error = useRouteError();
  console.log("Error:", error);

  if (isRouteErrorResponse(error)) {
    console.log("isRouteErrorResponse is true");
  }
  return (
    <div {...rest}>
      <div className="error-container">
        <div className="xl-font">Oops!</div>

        <h2 className="error-heading">404 - Page not found</h2>
        
        <p className="error-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur totam ipsam aliquam doloribus obcaecati </p>

        <Link to="/" className="error-btn">Go to Homepage</Link>
      </div>
    </div>
  );
}
