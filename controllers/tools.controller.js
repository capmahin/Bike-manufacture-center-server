const service = [
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
  res.send(foundTool);
};
