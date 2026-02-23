import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Products() {

  const [search,setSearch] = useState("");

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-5">

      <h2 className="text-center fw-bold mb-4">
        Our Products
      </h2>

      <input
        className="form-control mb-5"
        placeholder="Search products..."
        onChange={(e)=>setSearch(e.target.value)}
      />

      <div className="row">
        {filtered.map(product=>(
          <div className="col-lg-3 col-md-6 mb-4"
            key={product.id}>
            <ProductCard product={product}/>
          </div>
        ))}
      </div>

    </div>
  );
}
