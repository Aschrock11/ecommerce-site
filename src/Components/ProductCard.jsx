import React from "react";

function ProductCard({ img, alt, description, price, category, room }) {
  {
    console.log(description);
  }

  return (
    <div className="border-solid border-1 border-black h-40 w-40 bg-red-500">
      <img src={img} alt={alt} />
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
}
//img, alt, description, price, category array, lookup array.filter()

export default ProductCard;
