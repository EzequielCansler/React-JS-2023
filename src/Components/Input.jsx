import { Form } from "react-bootstrap";
function Input({ label, type = "text", name, placeholder = "", register }) {
  return (
    <>
      <Form.Group className="mb-3" controlId={name}>
        <Form.Label>{label}</Form.Label>
        <Form.Control type={type} placeholder={placeholder} {...register} />
      </Form.Group>
    </>
  );
}
export default Input;
