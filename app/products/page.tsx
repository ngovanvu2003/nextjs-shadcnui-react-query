import { getProducts } from "@/api/products";
import { columns } from "@/components/client/products/columns";
import { DataTable } from "@/components/client/products/data-table";
// import { useQuery } from "@tanstack/react-query";
// async function getData(): Promise<any> {
//   return [
//     {
//       id: "1",
//       name: "products 1",
//       price: 100,
//     },
//   ];
// }

export default async function Products() {
  // const data = await getData();
  // const { data } = useQuery({
  //   queryKey: ["initial-users"],
  //   queryFn: () => getProducts(),
  // });

  return (
    <div className="container mx-auto py-10 space-y-2">
      <div className="text-xl font-bold">Table Products </div>
      {/* <DataTable columns={columns} data={data} /> */}
    </div>
  );
}
