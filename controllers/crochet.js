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
   await  crochetProject(req, res);
  } catch (err) {
    res.json({ err });
  }
}

async function crochetProject(req, res) {
    try {
        const crochets = await Crochet.find({})
        res.json(crochets);
    } catch (err) {
        res.json({err})
    }
}

 function deleteCrochetProject(req, res) {
     try {
         Crochet.findByIdAndRemove(req.params.id)
     } catch (err){
         res.json({err})
     }
}

async function update(req, res) {
    try{
        Crochet.findByIdAndUpdate({id: req.params.id})
    } catch (err){
        res.json({err})
    }

}

async function edit (req, res) {
    try {
        const editCrochet = await
     Crochet.findById(req.params.id)
        res.json(editCrochet)
    } catch (err) {
        res.json({err})
    }
}

//async function show (req, res) {
//     crochetProject. findById(req.params.id) 
//         res.json(crochetProject)
// }
