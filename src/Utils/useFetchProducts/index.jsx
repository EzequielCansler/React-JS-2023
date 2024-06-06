import { useEffect, useState } from "react";
import { getAll } from "../../Services/mercadoLibreApi";

export const useFetchProduct = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("Cars");

  useEffect(() => {
    const request = async () => {
      try {
        const response = await getAll(search);
        console.log(response);
        setItems(response);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    request();
  }, [search]);
  return {
    items,
    loading,
    search,
    setSearch,
  };
};
