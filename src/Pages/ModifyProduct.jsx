import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Input from "../Components/Input";
import { Form, Button } from "react-bootstrap";
import { getById, update, remove } from "../Services/mercadoLibreApi";

export default function ModifyProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ mode: "onChange" });
  const { productId } = useParams();
  const Navigate = useNavigate();
  const handleDelete = () => {
    try {
      const document = remove(productId);
      if (document) {
        Navigate("/main");
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const request = async (data) => {
      console.log(data);
      try {
        const resposeProduct = await getById(productId);
        setValue("title", resposeProduct.data().title);
        setValue("price", resposeProduct.data().price);
        setValue("description", resposeProduct.data().description);
        setValue("thumbnail", resposeProduct.data().thumbnail);
      } catch (e) {
        console.log(e);
      }
    };
    request();
    // eslint-disable-next-line
  }, [productId]);
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const document = await update(productId, data);
      if (document) {
        Navigate("/main");
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
          Save
        </Button>
        <Button type="onSubmit" variant="danger" onClick={handleDelete}>
          Remove
        </Button>
      </Form>
    </>
  );
}
