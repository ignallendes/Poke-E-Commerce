import { useEffect, useState } from "react";
import ProductCard from "../productCard/productCard";
import "./ProductList.css";
import { useNavigate } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const filtered = products.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p>Cargando productos</p>;
  if (error) return <p>Hubo un error: {error}</p>;

  return (
    <section className="product-list">
      <h2 className="product-list__title">Productos</h2>

      <input
        type="text"
        className="product-list__search"
        placeholder="Buscar productos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="product-list__grid">
        {filtered.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => navigate(`${product.id}`)}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="product-list__status">
          No se encontraron resultados
        </p>
      )}
    </section>
  );
}

export default ProductList;