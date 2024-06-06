import "./Loading.css";
import Spinner from "react-bootstrap/Spinner";
export default function Loading({ loading, children }) {
  if (loading) {
    return (
      <div className="spinner">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  } else {
    return <>{children}</>;
  }
}
