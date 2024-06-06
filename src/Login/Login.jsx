import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Input from "../Components/Input";
import { Form } from "react-bootstrap";
import firebase from "../Services/firebase";
import { useState } from "react";
import ButtonWhitLoading from "../Components/ButtonWhitLoading";
import { useAuthContext } from "../Context/AuthContext";
import { getByUserId } from "../Services/usersServices";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const { handleLogin } = useAuthContext();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const responseUser = await firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password);
      console.log(responseUser);
      if (responseUser.user.uid) {
        const user = await getByUserId(responseUser.user.uid);
        handleLogin(user.docs[0].data());
        navigate("/home");
      }
      setLoading(true);
    } catch (e) {
      console.log(e);
      setLoading(true);
    }
  };
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)} className="inputUser">
        <Input
          label="Email"
          type="email"
          placeholder=" "
          register={{ ...register("email", { required: true }) }}
        />
        {errors.name && <span>this field is required</span>}
        <Input
          label="password"
          type="password"
          register={{ ...register("password", { required: true }) }}
        />
        {errors.name && <span>this field is required</span>}

        <ButtonWhitLoading type="submit" variant="primary" loading={loading}>
          Login
        </ButtonWhitLoading>
      </Form>
    </>
  );
}
export default Login;
