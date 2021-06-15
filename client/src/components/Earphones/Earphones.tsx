import { Product } from "../../types/product";
import { ProductsPageGrid } from "../common/ProductsPageGrid/ProductsPageGrid";
import { Categories } from "../../types/categories";
import { useFetch } from "../../hooks/fetch";
import { URLs } from "../../networking/url";

export const Earphones: React.FC = () => {
  const res = useFetch<Product[]>(URLs.HEADPHONES);

  return (
    <>
      {res.response?.data && (
        <ProductsPageGrid
          products={res.response.data}
          className={Categories.EARPHONES}
          category={Categories.EARPHONES}
        />
      )}
    </>
  );
};
