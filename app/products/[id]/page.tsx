interface ProductDetail {
  id: number;
  title: string;
  description: string;
  price: number;
  brand: string;
}

export async function generateStaticParams() {
  const res = await fetch('https://dummyjson.com/products?limit=10');
  const data = await res.json();
  
  return data.products.map((product: { id: number }) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product: ProductDetail = await res.json();

  return (
    <div className="p-6 border shadow m-4">
      <h2>{product.title}</h2>
      <p><em>Brand: {product.brand}</em></p>
      <p>{product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <hr />
      <a href="/products">← Back to Products</a>
    </div>
  );
}