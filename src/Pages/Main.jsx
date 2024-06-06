import { Products } from "../Components/Products";
import firebase from "../Services/firebase";
import { Row } from "react-bootstrap";
import AdvertisingCarousel from "../Components/Carousel";
import Loading from "../Components/Loading/Loading";
import { useFetchProduct } from "../Utils/useFetchProducts";

function Main({ login }) {
  const { items, loading, search, setSearch } = useFetchProduct();
  console.log("firebase");
  console.log(firebase);

  return (
    <Loading loading={loading}>
      <div>
        <AdvertisingCarousel product={items} />
        <div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Row>
          {items.map((product) => (
            <Products
              login={login}
              {...product.data()}
              key={product.id}
              id={product.id}
            />
          ))}
        </Row>
      </div>
    </Loading>
  );
}

export default Main;
