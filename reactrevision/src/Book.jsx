import React from "react";

const Book=({ title, author, isbn, price }) => {
  return (
    <div className="bookdiv">
      <h2>{title}</h2>
      <h2>{author}</h2>
      <p>{isbn}</p>
      <p>{price}</p>
    </div>
  );
};

export default Book;
