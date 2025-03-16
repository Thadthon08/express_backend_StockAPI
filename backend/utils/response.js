const successResponse = (res, message, data = {}, statusCode) => {
  res.status(statusCode).send({ message, data });
};

const errorResponse = (res, message, statusCode) => {
  res.status(statusCode).send({ message });
};

module.exports = { successResponse, errorResponse };
