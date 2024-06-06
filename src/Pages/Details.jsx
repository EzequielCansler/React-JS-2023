import { getById } from "../Services/mercadoLibreApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ButtonWhitLoading from "../Components/ButtonWhitLoading";
import Loading from "../Components/Loading/Loading";

function Details() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  console.log(productId);
  useEffect(() => {
    const request = async () => {
      try {
        const resposeProduct = await getById(productId);
        setProduct(resposeProduct.data());
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    request();
  }, [productId]);

  return (
    <>
      <Loading loading={loading}>
        <div className="details">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.price}$ </p>
          <img className="imgCss" src={product.thumbnail} alt="" />
        </div>

        <ButtonWhitLoading type="submit" variant="primary" as={Link} to="/Home">
          BACK
        </ButtonWhitLoading>
      </Loading>
    </>
  );
}
export default Details;
