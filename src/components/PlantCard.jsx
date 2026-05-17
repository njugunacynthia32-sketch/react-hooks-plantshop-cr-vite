import { useState } from "react";

function PlantCard({ plant }) {
  const [soldOut, setSoldOut] = useState(plant.soldOut);

  return (
    <li className="card"
    data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>

      <button onClick={() => setSoldOut(!soldOut)}>
        {soldOut ? "Out of Stock": "In Stock"}
      </button>
    </li>
  );
}

export default PlantCard;
