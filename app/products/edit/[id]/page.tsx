"use client";
import React, { useEffect, useState } from "react";
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
import Link from "next/link";
import { useProductQuery } from "@/hook/useProductQuery";
import { useProductMutation } from "@/hook/useProductMutation";
import { IProduct } from "@/interfaces/Product";

const Edit = ({ params }: any) => {
  const id = params.id;
  const router = useRouter();

  const { data, isLoading, isError } = useProductQuery(id ? +id : 0);
  const { form, onSubmit } = useProductMutation({
    action: "UPDATE",
    onSuccess: () => {
      console.log("Sửa thành công");
      form.reset();
      router.push("/products");
    },
  });
  const handleOnSubmit = (values: IProduct) => {
    onSubmit({ ...data?.data, ...values });
  };

  useEffect(() => {
    if (data && form) {
      form.reset({
        name: data?.data.name,
        price: data?.data.price,
      });
    }
  }, [data, form]);

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleOnSubmit)}
          className="space-y-4 p-10 sm:p-10 md:p-20 lg:p-20"
        >
          <div className="text-2xl font-bold ">
            {" "}
            Edit to Product ID:#{params?.id}
          </div>
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
              Update
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

export default Edit;
