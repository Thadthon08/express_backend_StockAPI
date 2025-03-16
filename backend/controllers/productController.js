const productModel = require("../models/productModel");
const { successResponse, errorResponse } = require("../utils/response");

const addProduct = (req, res) => {
  const data = req.body;
  //เช็คว่ามีสินค้าอยู่แล้วในระบบหรือไม่
  const exitingproduct = productModel.getById(data.id);
  if (exitingproduct) return errorResponse(res, "มีสินค้านี้อยู่แล้ว!!", 400);
  // add product
  const result = productModel.add(data);

  successResponse(res, "เพิ่มสินค้าสำเร็จ !!", result, 201);
};
const getProductById = (req, res) => {
  const id = Number(req.params.id);
  //get product by id
  const result = productModel.getById(id);
  if (!result) return errorResponse(res, "ไม่พบสินค้านี้!!", 404);
  successResponse(res, "ค้นหาสินค้าสำเร็จ !!", result, 200);
};
const updateProductById = (req, res) => {
  const id = Number(req.params.id);
  const data = req.body;
  const exitingproduct = productModel.getById(id);
  if (!exitingproduct)
    return errorResponse(
      res,
      "ไม่พบสินค้าดังกล่าว ทำให้ไม่สามารถอัปเดตข้อมูลได้",
      404
    );
  //update product by id
  const result = productModel.updateById(id, data);
  successResponse(res, "อัพเดทสินค้าสำเร็จ !!", result, 200);
};

const deleteProductById = (req, res) => {
  const id = Number(req.params.id);

  const exitingproduct = productModel.getById(id);
  if (!exitingproduct)
    return errorResponse(
      res,
      "ไม่พบสินค้าดังกล่าว ทำให้ไม่สามารถอัปเดตข้อมูลได้",
      404
    );
  //delete product by id
  const isDeleteSuccess = productModel.deleteById(id);
  console.log(`isDelete: ${isDeleteSuccess}`);

  if (isDeleteSuccess) {
    return successResponse(res, "ลบสินค้าสำเร็จ !!", {}, 200);
  } else {
    return errorResponse(res, "ไม่พบสินค้านี้!!", 404);
  }
};

module.exports = {
  addProduct,
  getProductById,
  updateProductById,
  deleteProductById,
};
