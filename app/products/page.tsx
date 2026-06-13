import Link from "next/link";

interface Product {
  id: number;
  title: string;
  price: number;
}

export default async function ProductsPage() {
  const res = await fetch('https://dummyjson.com/products', {
  });
  const data = await res.json();
  const products: Product[] = data.products;

  return (
    <div>
      <h1>Products (SSG)</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: "1rem" }}>
            <Link href={`/products/${product.id}`}>
              {product.title} - ${product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
