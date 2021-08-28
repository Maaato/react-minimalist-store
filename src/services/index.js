const ENDPOINT = "https://fakestoreapi.com";
const CATEGORYS = ["men's clothing", "women's clothing"];

export const getAllProducts = () => {
  return new Promise((resolve, reject) => {
    try {
      fetch(`${ENDPOINT}/products`)
        .then((res) =>
          res.json().then((products) => {
            console.log("Fetch Products OK: ", { products });
            const storeProducts = products.filter((e) =>
              CATEGORYS.includes(e.category)
            );
            resolve(storeProducts);
          })
        )
        .catch((err) => {
          console.error("Fetch Products Err: ", err);
          reject(err);
        });
    } catch (err) {
      console.error("Fetch Products Err: ", err);
      reject(err);
    }
  });
};
