const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

router.get("/nature", (req, res) => {
    fetch("https://pixabay.com/api/?key=16669259-11ed0855b28ae24ce05239d29&category=nature&image_type=photo")
    .then(res => res.json())
    .then((json) => {
        const image0 = json.hits[0].webformatURL
        const image1 = json.hits[1].webformatURL
        const image2 = json.hits[2].webformatURL
        const image3 = json.hits[3].webformatURL
        const image4 = json.hits[4].webformatURL
        return res.status(200).render("category", {data: [image0, image1, image2, image3, image4], name: "nature"})
    })
});

router.get("/sports", (req, res) => {
    fetch("https://pixabay.com/api/?key=16669259-11ed0855b28ae24ce05239d29&category=sports&image_type=photo")
    .then(res => res.json())
    .then((json) => {
        const image0 = json.hits[0].webformatURL
        const image1 = json.hits[1].webformatURL
        const image2 = json.hits[2].webformatURL
        const image3 = json.hits[3].webformatURL
        const image4 = json.hits[4].webformatURL
        return res.status(200).render("category", {data: [image0, image1, image2, image3, image4], name: "sports"})
    })
});

router.get("/people", (req, res) => {
    fetch("https://pixabay.com/api/?key=16669259-11ed0855b28ae24ce05239d29&category=people&image_type=photo")
    .then(res => res.json())
    .then((json) => {
        const image0 = json.hits[0].webformatURL
        const image1 = json.hits[1].webformatURL
        const image2 = json.hits[2].webformatURL
        const image3 = json.hits[3].webformatURL
        const image4 = json.hits[4].webformatURL
        return res.status(200).render("category", {data: [image0, image1, image2, image3, image4], name: "people"})
    })
});

router.get("/science", (req, res) => {
    fetch("https://pixabay.com/api/?key=16669259-11ed0855b28ae24ce05239d29&category=science&image_type=photo")
    .then(res => res.json())
    .then((json) => {
        const image0 = json.hits[0].webformatURL
        const image1 = json.hits[1].webformatURL
        const image2 = json.hits[2].webformatURL
        const image3 = json.hits[3].webformatURL
        const image4 = json.hits[4].webformatURL
        return res.status(200).render("category", {data: [image0, image1, image2, image3, image4], name: "science"})
    })
});

module.exports = router;