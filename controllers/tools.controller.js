let service = [
  { id: 1, name: "Hammer" },
  { id: 2, name: "Hammer2" },
  { id: 3, name: "Hammer3" },
];

module.exports.getAllTools = (req, res, next) => {
  const { limit, page } = req.query;
  console.log(limit, page);
  res.json(service.slice(0, limit));
};

module.exports.saveATool = (req, res) => {
  console.log(req.query);
  service.push(req.body);
  res.send(service);
};

module.exports.getToolDetail = (req, res) => {
  const { id } = req.params;
  console.log(id);
  // const filter = { _id: id };
  const foundTool = service.find(
    (services) => Number(services.id) === Number(id)
  );
  res.status(200).send({
    success: true,
    message: "Success",
    data: foundTool,
  });
  // res.status(500).send({
  //   success: false,
  //   error: "Internal server error",
  // });
};

module.exports.updateTool = (req, res) => {
  // const newData = req.body;
  const { id } = req.params;
  const filter = { _id: id };

  const newData = service.find((services) => services.id === Number(id));

  newData.id = id;
  newData.name = req.body.name;
  res.send(newData);
};

module.exports.deleteTool = (req, res) => {
  const { id } = req.params;
  const filter = { _id: id };

  service = service.filter((services) => services.id !== Number(id));

  res.send(service);
};
