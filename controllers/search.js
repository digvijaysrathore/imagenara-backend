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
                return res.status(200).render("error")
            } else {
                const image0 = json.results[0].urls.small
                const image1 = json.results[1].urls.small
                return res.status(200).render("search", {data: [image0, image1]})
            }
        })
    } else {
        fetch(`https://api.unsplash.com/search/photos/?query=${search}&color=${colors}&orientation=${orientation}&client_id=dxB1SfFCctr5KEHfBbBXL4KJ7EqM2RwxQDUWUkYMsFw`)
        .then(res => res.json())
        .then((json) => {
            const variable = json.results[0]
            console.log(variable)
            if(variable === undefined){
                return res.status(200).render("error")
            } else {
                const image0 = json.results[0].urls.small
                return res.status(200).render("search", {data: [image0]})
            }
        })
    }
})

module.exports = router;