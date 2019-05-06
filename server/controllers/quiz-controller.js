const db = require("../models");

// Defining methods for the accountController
module.exports = {
  find: (req, res) => {
    if(req.isAuthenticated()){
      db.Quiz
      .findOne({where: {userUUID:req.session.passport.user}})
      .then(dbaccount => {
        res.json(dbaccount);
      })
      .catch(err => res.status(422).json(err));
    }
    res.status(401).json(err);  
  },
  findAll: (req, res) => {
    if(req.isAuthenticated()){
      db.Quiz
      .find({where: {userUUID:req.session.passport.user}})
      .then(dbaccount => {
        res.json(dbaccount);
      })
      .catch(err => res.status(422).json(err));
    }
    res.status(401).json(err);  
  },
  create: (req, res) => {
    if(req.isAuthenticated()){
      db.Quiz
      .create(req.body, {userUUID:req.session.passport.user})
      .then(dbaccount => {
        res.json(dbaccount);
      })
      .catch(err => res.status(422).json(err));
    }
    res.status(401).json(err);  
  }
};

