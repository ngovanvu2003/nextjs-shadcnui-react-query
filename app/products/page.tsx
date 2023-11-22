import ProductsList from "@/components/client/products";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Products() {
  return (
    <div className="container mx-auto py-8 ">
      <div className="flex items-center  justify-between ">
        <div className="text-3xl font-bold mb-1">Table Products</div>
        <Link href="products/add">
          {" "}
          <Button variant="default" size="sm" type="submit">
            Thêm
          </Button>
        </Link>
      </div>
      <ProductsList />
    </div>
  );
}
