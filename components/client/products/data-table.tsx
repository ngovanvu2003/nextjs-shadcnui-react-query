"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { MdDelete } from "react-icons/md";
import { FaPenRuler } from "react-icons/fa6";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProducts } from "@/api/products";
import { useProductMutation } from "@/hook/useProductMutation";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  // const queryClient = useQueryClient();

  // const mutation = useMutation({
  //   mutationFn: async (id) => await deleteProducts(id),
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({
  //       predicate: (query) => query.queryKey.includes("products"),
  //     });
  //     console.log("Thành công");
  //   },
  //   onError: () => {
  //     console.log("Lỗi");
  //   },
  // });
  // const onhanldeRemove = (id: any) => {
  //   confirmAlert({
  //     title: "Confirm to submit",
  //     message: "Are you sure to do this.",
  //     buttons: [
  //       {
  //         label: "Yes",
  //         onClick: () => mutation.mutate(id),
  //       },
  //       {
  //         label: "No",
  //         onClick: () => console.log("Click No"),
  //       },
  //     ],
  //   });
  // };

  const { onSubmit } = useProductMutation({
    action: "DELETE",
    onSuccess: () => {
      console.log("Xóa thành công");
    },
  });
  const onhanldeRemove = (product: any) => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => onSubmit(product),
        },
        {
          label: "No",
          onClick: () => console.log("Click No"),
        },
      ],
    });
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table?.getHeaderGroups()?.map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
              <TableHead className="font-medium">Action</TableHead>
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table?.getRowModel()?.rows?.length ? (
            table?.getRowModel()?.rows?.map((row: any) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell: any) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div>
                      <Link href={`/products/edit/${row?.original?.id}`}>
                        <div className="text-xl">
                          <FaPenRuler />
                        </div>
                      </Link>
                    </div>
                    <button
                      className="text-2xl"
                      onClick={() => onhanldeRemove(row?.original)}
                    >
                      <MdDelete />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
