"use client";
import React from "react";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { useForm, SubmitHandler } from "react-hook-form";
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

const formAddSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "Không được bỏ trống",
    "any.required": "Tên là trường bắt buộc",
  }),
  price: Joi.number().integer().positive().required().messages({
    "number.base": "Giá bán phải là một số",
    "number.integer": "Giá bán phải là một số nguyên",
    "number.positive": "Giá bán phải là một số lớn hơn 0",
    "any.required": "Giá bán là trường bắt buộc",
  }),
});

const onSubmit: SubmitHandler<any> = (value: any) => {
  console.log(value);
};

const Add = () => {
  const form = useForm({
    resolver: joiResolver(formAddSchema),
    defaultValues: {
      name: "",
      price: 0,
    },
  });
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-20">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="name">Username</FormLabel>
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
          <Button variant="default" size="sm" type="submit">
            Thêm
          </Button>
        </form>
      </Form>
    </>
  );
};

export default Add;
