import { Product } from "../../types/product";
import { ProductsPageGrid } from "../common/ProductsPageGrid/ProductsPageGrid";
import { Categories } from "../../types/categories";
import { useFetch } from "../../hooks/fetch";
import { URLs } from "../../networking/url";
import { NotFound } from "../NotFound/NotFound";

export const Headphones: React.FC = () => {
  const res = useFetch<Product[]>(URLs.HEADPHONES);

  if (res.error) {
    return <NotFound />;
  }

  return (
    <>
      {res.response?.data && (
        <ProductsPageGrid
          products={res.response?.data}
          className={Categories.HEADPHONES}
          category={Categories.HEADPHONES}
        />
      )}
    </>
  );
};
