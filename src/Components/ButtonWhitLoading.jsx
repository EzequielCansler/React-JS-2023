import { Button, Spinner } from "react-bootstrap";

export default function ButtonWhitLoading({
  variant = "primary",
  type = "submit",
  loading,
  children,
}) {
  return (
    <div>
      <Button type={type} variant={variant} disabled={loading}>
        {loading && <Spinner animation="border" size="sm" />}
        {children}
      </Button>
    </div>
  );
}
