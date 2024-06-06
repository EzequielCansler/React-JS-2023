import { useForm } from "react-hook-form";
import Input from "../Components/Input";
import { Form } from "react-bootstrap";
import firebase from "../Services/firebase";
import { useState } from "react";
import AlertVariant from "../Components/AlertVariant";
import ButtonWhitLoading from "../Components/ButtonWhitLoading";
import "./Register.css";

function UserRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const [alert, setAlert] = useState({ variant: "", text: "" });
  const [loading, setLoading] = useState(false);
  const onSubmit = async (data) => {
    setLoading(true);
    console.log(data);
    try {
      const responseUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password);
      console.log(responseUser);
      if (responseUser.user.uid) {
        const document = await firebase.firestore().collection("users").add({
          name: data.name,
          LastName: data.LastName,
          phone: data.phone,
          userId: responseUser.user.uid,
        });
        console.log("document:", document);
        if (document) {
          setAlert({
            variant: "success",
            text: "Thanks for register",
            duration: 500,
            link: "/Home",
          });
          setLoading(false);
        }
      }
    } catch (error) {
      console.log(error);
      setAlert({ variant: "danger", text: "This user already exist" });
      setLoading(false);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)} className="inputUser">
        <Input
          label="Name"
          register={{ ...register("name", { required: true }) }}
        />
        {errors.name && <span>this field is required</span>}
        <Input
          label="Last Name"
          register={{ ...register("LastName", { required: true }) }}
        />
        {errors.name && <span>this field is required</span>}

        <Input
          label="Email"
          type="email"
          register={{ ...register("email", { required: true }) }}
        />
        {errors.email && <span>this field is required</span>}

        <Input
          label="Phone"
          type="number"
          register={{ ...register("phone", { required: true }) }}
        />
        {errors.phone && <span>this field is required</span>}

        <Input
          label="Password"
          type="password"
          register={{
            ...register("password", { required: true, minLength: 8 }),
          }}
        />
        {errors.password && (
          <div>
            {errors.password?.type === "required" && (
              <span>this field is required</span>
            )}
            {errors.password?.type === "minLength" && (
              <span>this field need 8 caracters</span>
            )}
          </div>
        )}
        <div>
          <ButtonWhitLoading type="submit" variant="primary" loading={loading}>
            Sing Up
          </ButtonWhitLoading>
        </div>
      </Form>
      <AlertVariant {...alert} />
    </div>
  );
}
export default UserRegister;
