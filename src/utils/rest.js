export const errorHandler = (res, { status, message }) => {
  return res.status(status)
    .send({ status, message });
}