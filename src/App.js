// import logo from './logo.svg';
import './App.css';
import React from 'react';
import ProductName from './Name.js';
import ProductPrice from './Price.js';
import ProductDescription from './Description.js';
import ProductImage from './Image.js';
import productData from './product'; 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function App() {
  return (
    <Card style={{ width: '18rem' }}>
      <ProductImage imageUrl={productData.imageUrl} />
      <Card.Body>
        <ProductName name={productData.name} />
        <ProductPrice price={productData.price} />
        <ProductDescription description={productData.description} />
        <Button variant="primary">Order Now</Button>
      </Card.Body>
    </Card>
  );
}

export default App;