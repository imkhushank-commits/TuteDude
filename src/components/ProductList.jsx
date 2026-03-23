import React from "react";
import useFetch from "../hooks/useFetch";

const ProductList = () => {
  const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  if (loading) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  if (error) return <h2 style={{ textAlign: "center" }}>Error: {error}</h2>;

  return (
    <div className="container">
      <h1>Photos</h1>

      <div className="grid">
        {data.slice(0, 12).map((item) => (
          <div key={item.id} className="card">
            
            <div className="image-box">
              <img src={item.images[0]} alt={item.title} />
            </div>

            <p>{item.title}</p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;