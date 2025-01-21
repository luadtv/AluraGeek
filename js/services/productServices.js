const productList = () => {
  return fetch("http://localhost:3001/products")
      .then((res) => {
          if (!res.ok) {
              throw new Error('Network response was not ok');
          }
          return res.json();
      })
      .catch((err) => {
          console.error('Error fetching products:', err);
          throw err;
      });
}

const sendProduct = (name, price, image) => {
  return fetch("http://localhost:3001/products", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
          name,
          price,
          image,
      }),
  })
  .then((res) => {
      if (!res.ok) {
          throw new Error('Error al agregar el producto');
      }
      return res.json();
  })
  .catch((err) => {
      console.log('Error al agregar el producto:', err);
      throw err;
  });
};

const deleteProduct = (id) => {
  return fetch(`http://localhost:3001/products/${id}`, {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json",
      },
  })
  .then((res) => res.json())
  .catch((err) => console.log(err));
}

export const servicesProducts = {
  productList,
  sendProduct,
  deleteProduct
};
