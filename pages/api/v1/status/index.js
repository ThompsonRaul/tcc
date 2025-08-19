function status(request, response) {
  response
    .status(200)
    .json({ chave: "Futuramente teremos o status da API por aqui!" });
}
export default status;
