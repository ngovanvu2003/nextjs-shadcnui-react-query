import { getProducts, getProductsById } from "@/api/products";
import { useQuery } from "@tanstack/react-query";

export const useProductQuery = (id?: number) => {
  const { data, ...rest } = useQuery({
    queryKey: ["PRODUCT_KEY", id],
    queryFn: async () => (id ? await getProductsById(id) : await getProducts()),
  });
  return { data, ...rest };
};
