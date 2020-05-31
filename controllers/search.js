const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

router.post("/search", (req, res) => {
    const search = req.body.keyword
    const colors = req.body.color
    const orientation = req.body.orientation
    if(orientation === undefined || colors === undefined){
        fetch(`https://api.unsplash.com/search/photos/?query=${search}&client_id=dxB1SfFCctr5KEHfBbBXL4KJ7EqM2RwxQDUWUkYMsFw`)
        .then(res => res.json())
        .then((json) => {
            const variable = json.results[0]
            console.log(variable)
            if(variable === undefined){
                return res.status(400).json({
                    err: "Failed to get images."
                })
            } else {
                const images = json.results
                return res.status(200).json(images)
            }
        })
    } else {
        fetch(`https://api.unsplash.com/search/photos/?query=${search}&color=${colors}&orientation=${orientation}&client_id=dxB1SfFCctr5KEHfBbBXL4KJ7EqM2RwxQDUWUkYMsFw`)
        .then(res => res.json())
        .then((json) => {
            const variable = json.results[0]
            console.log(variable)
            if(variable === undefined){
                return res.status(400).json({
                    err: "Failed to get images."
                })
            } else {
                const images = json.results
                return res.status(200).json(images)
            }
        })
    }
})

module.exports = router;