const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

router.post("/search", (req, res) => {
    const search = req.body.keyword
    const colors = req.body.color
    fetch(`https://pixabay.com/api/?key=16669259-11ed0855b28ae24ce05239d29&q=${search}&colors=${colors}&image_type=photo`)
    .then(res => res.json())
    .then((json) => {
        const image0 = json.hits[0].webformatURL
        const image1 = json.hits[1].webformatURL
        const image2 = json.hits[2].webformatURL
        const image3 = json.hits[3].webformatURL
        const image4 = json.hits[4].webformatURL
        return res.status(200).render("search", {data: [image0, image1, image2, image3, image4]})
    })
})

module.exports = router;