import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ item }) {
  console.log(item, "card")
  return (
    
    
      <div className="card">
        <Link to={`/items/${item.id}`}>
        <img src={item.img_url} alt={item.name}/>
        </Link>
        <h2>{item.name}</h2>
        <h3>Price: ${item.price}</h3>
        <p><strong>Description:</strong> {item.description}</p>
      </div>
   
  );
}