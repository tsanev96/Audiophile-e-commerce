import { ProductsPageGrid } from "../common/ProductsPageGrid/ProductsPageGrid";
import { Product } from "../../types/product";
import { Categories } from "../../types/categories";
import { useFetch } from "../../hooks/fetch";
import { URLs } from "../../networking/url";
import { NotFound } from "../NotFound/NotFound";

export const Speakers: React.FC = () => {
  const res = useFetch<Product[]>(URLs.SPEAKERS);

  if (res.error) {
    return <NotFound />;
  }
  return (
    <>
      {res.response?.data && (
        <ProductsPageGrid
          products={res.response.data}
          className={Categories.SPEAKERS}
          category={Categories.SPEAKERS}
        />
      )}
    </>
  );
};
