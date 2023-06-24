const express = require("express");
const { debug } = require('console');

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const router = express.Router();

const Auth = require('../models/auth');
const auth = require("../models/auth");


router.post("/signup", (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const auth = new Auth({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                phone: req.body.phone,
                password: hash,
            });
            auth.save()
                .then(result => {
                    res.status(201).json({
                        message: "admin created",
                        result: result
                    });
                })
                .catch(error => {
                    res.status(500).json({
                        error: error
                    });
                });
        });
});


router.post("/login", (req, res, next) => {
    Auth.findOne({ email: req.body.email })
        .then(admin => {
            if (!admin) {
                return res.status(401).json({
                    message: "username does not exist"
                });
            }
            return bcrypt.compare(req.body.password, admin.password);
        })
        .then(result => {
            if (result != true) {
                return res.status(401).json({
                    message: "password does not exist"
                });
            }
            console.log(result)
            const token = jwt.sign(
                { email: "admin.email", adminId: "admin._id" },
                "longest_secret_key",
                { expiresIn: "1h" }
            );
            return res.status(200).json({
                token: token
            });
        })
        .catch(error => {
            return res.status(401).json({
                message: "auth failed"
            });
        });
});



module.exports = router;