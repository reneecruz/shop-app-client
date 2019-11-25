import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ item }) {
  return (
    <Link to={`/items/${item.id}`}>
      <div className="card">
        <img src={item.img_url} alt={item.name}/>
        <h2>{item.name}</h2>
        <h2>{item.price}</h2>
        <h2>{item.description}</h2>
      </div>
    </Link>
  );
}