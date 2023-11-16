import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="m-4 text-center">
        <div className=" font-bold text-[1.5em]">
          We will use shadcn adn react-query to create a basic product.
        </div>
        <div className="mt-2 space-x-4">
          <Link href="/products">
            <Button variant="default" size="sm">
              Get Started
            </Button>
          </Link>
          <Link href="/products">
            <Button variant="default" size="sm">
              GitHub
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
