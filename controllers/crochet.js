const Crochet = require("../models/crochet");

module.exports = {
  create,
  crochetProject,
  delete: deleteOne,
  update,
  edit, 
  show,
  showOne
};

async function create(req, res) {
  console.log(req.user);
  try {
    const newCrochet = await Crochet.create(req.body);
   res.json(newCrochet)
  } catch (err) {
    res.json({ err });
  }
}

async function crochetProject(req, res) {
    try {
        const crochets = await Crochet.find({})
        console.log(crochets)
        res.json(crochets);
    } catch (err) {
        res.json(err)
    }
}

 async function deleteOne(req, res) {
     try {
      const deleteCrochet = await Crochet.findByIdAndRemove(req.params.id)
      res.json(deleteCrochet)
     } catch (err){
         res.json(err)
     }
}

async function update(req, res) {
    try{
      const updateCrochet = await  
      Crochet.findByIdAndUpdate({id: req.params.id})
      res.json(updateCrochet)
    } catch (err){
        res.json({err})
    }

}

async function show(req, res) {
    try{
        const showCrochet = await
        Crochet.findById(req.params.id) 
            res.json(showCrochet)
    } catch (err) {
        res.json({err})
    }
}

async function showOne(req, res) {
    try{
        const oneCrochet = await 
        Crochet.find({_id: req.params.id})
        res.json(oneCrochet)
    }catch(err){
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

