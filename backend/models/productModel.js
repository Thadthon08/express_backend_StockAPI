let products = [];

const add = (product) => {
  //add data
  products.push(product);
  return products;
};

const getById = (id) => {
  console.log("type id: " + typeof id);
  console.log(products);

  //get data by id
  const data = products.find((product) => product.id === id);
  return data;
};

const updateById = (id, updatedProduct) => {
  //update data by id
  const index = products.findIndex((product) => product.id === id);
  if (index !== -1) {
    products[index] = { ...products[index], ...updatedProduct };
    return products[index];
  }
};

const deleteById = (id) => {
  //delete data by id
  const index = products.findIndex((product) => product.id === id);
  if (index !== -1) {
    products.splice(index, 1);
    return true;
  }
};

module.exports = { add, getById, updateById, deleteById };
