import { addProducts, deleteProducts, editProducts } from "@/api/products";
import { IProduct } from "@/interfaces/Product";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { formAddSchema } from "@/schemas/products";

type FormControlType = {
  name: string;
  price: string;
};

type useProductMutationProps = {
  action: "CREATE" | "UPDATE" | "DELETE";
  defaultValues?: IProduct;
  onSuccess?: () => void;
};
export const useProductMutation = ({
  action,
  defaultValues = { name: "", price: "" },
  onSuccess,
}: useProductMutationProps) => {
  const queryClient = useQueryClient();

  const form = useForm<FormControlType>({
    resolver: joiResolver(formAddSchema),
    defaultValues,
  });
  const { mutate, ...rest } = useMutation({
    mutationFn: async (product: IProduct) => {
      switch (action) {
        case "CREATE":
          return await addProducts(product);
        case "UPDATE":
          return await editProducts(product);
        case "DELETE":
          return await deleteProducts(product.id!);
        default:
          return null;
      }
    },
    onSuccess: () => {
      // thêm | cập nhật thành công
      queryClient.invalidateQueries({
        queryKey: ["PRODUCT_KEY"],
      });
      onSuccess && onSuccess();
    },
  });
  const onSubmit: SubmitHandler<FormControlType> = (values) => {
    mutate(values as IProduct);
  };

  return {
    form,
    onSubmit,
    ...rest,
  };
};
