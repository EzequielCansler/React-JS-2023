import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../Pages/Register.css";
export default function AlertVariant({ variant, text, duration = 0, link }) {
  const navigate = useNavigate();
  if (duration !== 0 && link) {
    setTimeout(() => {
      navigate(link);
    }, duration);
  }
  return (
    <Alert className="text" variant={variant}>
      {text}
    </Alert>
  );
}
