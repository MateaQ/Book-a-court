const express =require ("express");
const router = express.Router();

const Sport = require('../models/sport')


router.get("/getallsports", async(req, res)  => {


try{

    const sports =await Sport.find({})
return res.json({sports})

}catch (error){
    return res.status(400).json({message: error})

}
});
module.exports = router;