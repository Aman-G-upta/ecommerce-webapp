const mongoose = require('mongoose');
const config = require('config');
const dbgr = require('debug')("development:mongoose");
//    mongodb+srv://amanecommerce:sdcTEg2hA3aO5b2a@cluster0.z8n4zk.mongodb.net/?appName=Cluster0


mongoose
    .connect(`${config.get("MONGODB_URI")}`)
    .then(function () {
        dbgr("Connnected");
    })
    .catch(function (err) {
        dbgr(err);
    });

module.exports = mongoose.connection;

