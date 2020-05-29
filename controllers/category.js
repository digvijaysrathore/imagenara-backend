const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

router.get("/pictures", (req, res) => {
    fetch("https://pixabay.com/api/?key=16669259-11ed0855b28ae24ce05239d29&image_type=photo")
        .then(res => res.json())
        .then((json) => {
            const images = json.hits
            return res.status(200).json(images)
        })
})

router.get("/nature", (req, res) => {
    fetch("https://pixabay.com/api/?key=16669259-11ed0855b28ae24ce05239d29&category=nature&image_type=photo")
    .then(res => res.json())
    .then((json) => {
        return res.status(200).json(json.hits)
    })
});

router.get("/sports", (req, res) => {
    fetch("https://pixabay.com/api/?key=16669259-11ed0855b28ae24ce05239d29&category=sports&image_type=photo")
    .then(res => res.json())
    .then((json) => {
        const images = json.hits
        return res.status(200).json(images)
    })
});

router.get("/people", (req, res) => {
    fetch("https://pixabay.com/api/?key=16669259-11ed0855b28ae24ce05239d29&category=people&image_type=photo")
    .then(res => res.json())
    .then((json) => {
        const images = json.hits
        return res.status(200).json(images)
    })
});

router.get("/science", (req, res) => {
    fetch("https://pixabay.com/api/?key=16669259-11ed0855b28ae24ce05239d29&category=science&image_type=photo")
    .then(res => res.json())
    .then((json) => {
        const images = json.hits
        return res.status(200).json(images)
    })
});

module.exports = router;