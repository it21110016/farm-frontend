import React from 'react';
import './Products.css'; // Import your CSS file for styling
import product1 from '../images/product1.jpg'; // Import product images
import product2 from '../images/product2.jpg'; // Import product images
import product3 from '../images/product3.webp'; // Import product images
import product4 from '../images/product4.jpg'; // Import product images
import product5 from '../images/product5.jpg'; // Import product images

const ProductsAndSalesPage = () => {
  return (
    <div className="products-sales-container">
      <section className="products-header">
        <h1>Our Products</h1>
        <p>Discover a variety of fresh and high-quality products from Red Rooster Farm.</p>
      </section>

      <section className="product-list">
        <div className="product-item">
          <img src={product1} alt="Product 1" />
          <h3>Fresh Organic Vegetables</h3>
          <p>Locally grown organic vegetables with no pesticides.</p>
          <p>
            <strong>Price:</strong> $2.99 per kg
          </p>
        </div>

        <div className="product-item">
          <img src={product2} alt="Product 2" style={{width: '700px'}}/>
          <h3>Grass-Fed Beef</h3>
          <p>High-quality grass-fed beef, raised with care on our farm.</p>
          <p>
            <strong>Price:</strong> $12.99 per kg
          </p>
        </div>

        <div className="product-item">
          <img src={product3} alt="Product 3" />
          <h3>Free-Range Eggs</h3>
          <p>Farm-fresh free-range eggs from our happy hens.</p>
          <p>
            <strong>Price:</strong> $3.99 per kg
          </p>
        </div>

        <div className="product-item">
          <img src={product4} alt="Product 4" />
          <h3>Homemade Cheese</h3>
          <p>Artisanal cheese crafted from our farm's dairy products.</p>
          <p>
            <strong>Price:</strong> $8.99 per kg
          </p>
        </div>

        <div className="product-item">
          <img src={product5} alt="Product 5" />
          <h3>Organic Fruits Basket</h3>
          <p>A variety of organically grown fruits in one delightful basket.</p>
          <p>
            <strong>Price:</strong> $9.99 per kg
          </p>
        </div>

        {/* Add more product items as needed */}
      </section>

      <section className="sales-details">
        <h2>Sales Information</h2>
        <p>
          Place your order by calling our farm outlet at +32 123 456 789. We offer
          convenient "Cash on Delivery" (COD) payment options for phone orders.
        </p>
      </section>
    </div>
  );
};

export default ProductsAndSalesPage;