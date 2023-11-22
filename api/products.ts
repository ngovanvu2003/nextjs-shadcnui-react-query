import connect_Api from "./connect";

export const getProducts = () => {
  return connect_Api.get(`/products`);
};

export const getProductsById = (id: number) => {
  return connect_Api.patch(`/products/${id}`);
};

export const addProducts = (product: any) => {
  return connect_Api.post(`/products`, product);
};

export const editProducts = (product: any) => {
  return connect_Api.patch(`/products/${product.id}`, product);
};

export const deleteProducts = (id: any) => {
  return connect_Api.delete(`/products/${id}`);
};
