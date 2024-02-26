import React, { useState, useEffect } from "react";

export function Showthistodo({ title }) {
  const [thistodo, setThistodo] = useState();

  useEffect(() => {
    fetch(`http://localhost:3000/singletodo?title=${title}`)
      .then((res) => 
         res.json()
      )
      .then((data) => {
        setThistodo(data.msg);
      })
     
  }, [title]);

  if (!thistodo) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{thistodo.description}</h1>
    </>
  );
}