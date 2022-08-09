const express = require('express');
const router = express.Router();
require("../db/connection");
const Estate = require("../model/estateSchema");

function sortIsPopular(estateData) {
    let ini = 0;
    let last = estateData.length - 1
    while (last > ini) {
        while (estateData[ini].isPopular) {
            ini++;
        }
        while (!estateData[last].isPopular) {
            last--;
        }
        if (last > ini) {
            let temp = estateData[ini];
            estateData[ini] = estateData[last];
            estateData[last] = temp;
            ini++;
            last--;
        }
    }
    return estateData;
}

router.get("/", (req, res) => {
    Estate.find((err, docs) => {
        if (err) {
            res.json({ error: err });
        }
        else {
            res.json(sortIsPopular(docs));
        }
    })
});

router.post('/', async (req, res) => {
    const data = req.body;
    const newEstate = new Estate(data);
    const saveEstate = await newEstate.save();
    if (saveEstate) {
        res.status(201).json({ message: "Estate Saved Successfully" });
    }
    else {
        res.status(500).json({ error: "Failed To Add Estate successfully" });
    }
})


module.exports = router;