import { MainProducts } from "app/components/Home/MainProducts";
import { Metadata } from "next";

// metadatos para estaticas
export const metadata: Metadata = {
  title: "Future World",
  description: "Welcome to Future World Store, an ecommerce from other century",
  keywords: ["ecommerce", "future", "world"]

}

export default function Home() {
  return (
    <main>
      <MainProducts />
    </main>
  );
}
