var express = require("express");
var Problem = require("../models/problemModel");

const problemRouter = express.Router();

problemRouter
  .get('/', (req, res) => {
    Problem.find({}, (err, problems) => {
      console.log(err);
      res.json(problems)
    })
  })
  .get('/:id', (req, res) => {
    var id = req.params.id;
    Problem.findById(id, (err, problem) => {
      console.log(err);
      res.json(problem);
    })
  })
  .post('/', (req, res) => {
    let problem = new Problem(req.body);
    problem.save();
    res.status(201).send(problem)
  })
  .put('/:id', (req, res) => {
    var id = req.params.id;
    Problem.findByIdAndUpdate(id, req.body, {
        new: true
      })
      .then((result) => {
        console.log(result);
        res.json(result);
      })
  })
  .delete('/:id', (req, res) => {
    var id = req.params.id;
    Problem.findByIdAndDelete(id)
      .then(result => {
        res.json(result);
      })
      .catch(error => {
        res.json(error);
      })
  })

module.exports = problemRouter;