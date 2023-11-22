"use client";
import { columns } from "./columns";
import { Skeleton } from "@/components/ui/skeleton";
import { DataTable } from "./data-table";
import { useProductQuery } from "@/hook/useProductQuery";

export default function ProductsList() {
  // const { data, isLoading, isError } = useQuery({
  //   queryKey: ["products"],
  //   queryFn: getProducts,
  //   staleTime: 5 * 1000,
  // });
  const { data, isLoading, isError } = useProductQuery();
  if (isLoading) {
    return (
      <div className="flex mt-1 justify-center">
        <Skeleton className="w-[50rem] bg-[#c1c1c1] m-3 h-[30px] " />
        <Skeleton className="w-[50rem] bg-[#c1c1c1] m-3 h-[30px] " />
        <Skeleton className="w-[50rem] bg-[#c1c1c1] m-3 h-[30px] " />
        <Skeleton className="w-[50rem] bg-[#c1c1c1] m-3 h-[30px] " />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center mt-6 text-[20rem] font-bold text-red-600 ">
        Error
      </div>
    );
  }

  return (
    <div className=" mx-auto py-4">
      <DataTable columns={columns} data={data?.data} />
    </div>
  );
}
