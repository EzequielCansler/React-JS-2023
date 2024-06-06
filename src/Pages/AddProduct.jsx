import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Input from "../Components/Input";
import { Form, Button } from "react-bootstrap";
import { create } from "../Services/mercadoLibreApi";

export default function AddProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const document = await create(data);
      if (document) {
        navigate("/main");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)} className="inputUser">
        <Input
          label="Title"
          placeholder=" "
          register={{ ...register("title", { required: true }) }}
        />
        {errors.name && <span>this field is required</span>}
        <Input
          label="Price"
          type="number"
          register={{ ...register("price", { required: true }) }}
        />
        {errors.name && <span>this field is required</span>}
        <Input
          label="description"
          register={{ ...register("description", { required: true }) }}
        />
        {errors.name && <span>this field is required</span>}
        <Input
          label="Image"
          register={{ ...register("thumbnail", { required: true }) }}
        />
        {errors.name && <span>this field is required</span>}

        <Button type="onSubmit" variant="primary">
          save
        </Button>
      </Form>
    </>
  );
}
