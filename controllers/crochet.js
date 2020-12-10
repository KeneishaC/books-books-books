const Crochet = require("../models/crochet");

module.exports = {
  create,
  crochetProject,
  delete: deleteCrochetProject,
  update,
  edit, 
//   show
};

async function create(req, res) {
  console.log(req.user);
  try {
    await Crochet.create(req.body);
    crochetProject(req, res);
  } catch (err) {
    res.json({ err });
  }
}

async function crochetProject(req, res) {
  const crochets = await crochetProject.find({})
  res.json(crochets);
}

 function deleteCrochetProject(req, res) {
    crochetProject.findByIdAndRemove(id)
}

async function update(req, res) {
     crochetProject.findByIdAndUpdate({id: req.params.id})

}

async function edit (req, res) {
 crochetProject.findById(req.params.id)
    res.json(crochetProject)
}

//async function show (req, res) {
//     crochetProject. findById(req.params.id) 
//         res.json(crochetProject)
// }
