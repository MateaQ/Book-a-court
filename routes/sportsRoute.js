const express =require ("express");
const router = express.Router();

const Sport = require('../models/sport')


router.get("/getallsports", async(_req, res)  => {


try{

    const sports =await sports.find({})
 res.send({sports})

}catch (error){
    return res.status(400).json({message: error})

}
});
module.exports = router;