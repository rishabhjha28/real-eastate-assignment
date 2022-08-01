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
    const searchData = req.query

    console.log(searchData)
    const search = {
        houseAddress: searchData.houseAddress,
        estateType: searchData.estateType,
        houseRent: { $lte: searchData.houseRent },
    }
    console.log(search)
    Estate.find(search, (err, docs) => {
        if (err) {
            res.json({ error: err });
        }
        else {
            console.log(docs)
            if (docs.length) {
                res.status(201).json(sortIsPopular(docs));
            }
            else {
                res.status(400).json({ msg: "No such estate available" });
            }
        }
    })
});

module.exports = router;