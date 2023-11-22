"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import { useProductMutation } from "@/hook/useProductMutation";

const Add = () => {
  // const router = useRouter();
  // const { toast } = useToast();
  // const queryClient = useQueryClient();
  // const form = useForm({
  //   resolver: joiResolver(formAddSchema),
  //   defaultValues: {
  //     name: "",
  //     price: 0,
  //   },
  // });
  // const mutation = useMutation({
  //   mutationFn: async (product) => await addProducts(product),
  //   onSuccess: () => {
  //     // queryClient.invalidateQueries(["products"]);  or
  //     queryClient.invalidateQueries({
  //       predicate: (query) => query.queryKey.includes("products"),
  //     });
  //     console.log("Thành công");
  //     router.push("/products");
  //     // toast({
  //     //   title: "Scheduled: Catch up",
  //     //   description: "Friday, February 10, 2023 at 5:57 PM",
  //     // });
  //   },
  //   onError: () => {
  //     console.log("Lỗi");
  //     // toast({
  //     //   title: "Scheduled: Catch up",
  //     //   description: "Friday, February 10, 2023 at 5:57 PM",
  //     // });
  //   },
  // });
  // const onSubmit = (data: any) => {
  //   mutation.mutate(data);
  // };
  const router = useRouter();
  const { toast } = useToast();

  const { form, onSubmit } = useProductMutation({
    action: "CREATE",
    onSuccess: () => {
      console.log("Thêm thành công");
      form.reset();
      router.push("/products");
    },
  });

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 p-10 sm:p-10 md:p-20 lg:p-20"
        >
          <div className="text-2xl font-bold ">Add Product</div>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="name">Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="price">Price</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="price" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className=" flex justify-between ">
            <Button variant="default" size="sm" type="submit">
              Add Now
            </Button>
            <Link href={"/products"}>
              <Button variant="default" size="sm" type="submit">
                Back
              </Button>
            </Link>
          </div>
        </form>
      </Form>
    </>
  );
};

export default Add;
